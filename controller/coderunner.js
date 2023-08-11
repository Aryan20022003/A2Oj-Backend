// const express = require('express');
// const bodyParser = require('body-parser');
const { exec } = require("child_process");
const fs = require("fs");
const { spawn } = require("child_process");

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/run', (req, res) => {
//     const { code, input } = req.body;

//     if (!code) {
//         return res.status(400).send('No code provided'); // Added return to prevent further execution
//     }

//     const codeFileName = 'temp.cpp';
//     const inputFileName = 'temp.txt';
//     const outputFileName = 'temp.out';
//     fs.writeFileSync(codeFileName, code);
//     fs.writeFileSync(inputFileName, input);

//     exec(`g++ ${codeFileName} -o ${outputFileName}`, (err, stdout, stderr) => {
//         if (err) {
//             return res.status(500).send(stderr);
//         }
//         exec(`./${outputFileName} < ${inputFileName}`, (err, stdout, stderr) => {
//             if (err) {
//                 return res.status(500).send(stderr);
//             }
//             res.send(stdout);
//         });
//     });
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // Moved outside the POST handler

//same code is hosted at remote url used in codeController.js for read and write as cyclic doesn't allow to use localhost

const codeRunner = async (req, resp, error) => (req, resp) => {
  const { code, input } = req.body;

  if (!code) {
    return resp.status(400).send("No code provided");
  }

  const compileCommand = "g++";
  const runCommand = "./temp.out";

  // Compile code
  const compileProcess = spawn(compileCommand, [
    "-x",
    "c++",
    "-",
    "-o",
    "temp.out",
  ]);
  compileProcess.stdin.write(code);
  compileProcess.stdin.end();

  let compileErrors = "";

  compileProcess.stderr.on("data", (data) => {
    compileErrors += data;
  });

  compileProcess.on("close", async (code) => {
    if (code !== 0) {
      return resp.status(500).send(`Compilation error:\n${compileErrors}`);
    }

    // If compilation was successful, run the code
    const runProcess = spawn(runCommand);

    if (input) {
      runProcess.stdin.write(input);
      runProcess.stdin.end();
    }

    let stdout = "";
    let runtimeErrors = "";

    runProcess.stdout.on("data", (data) => {
      stdout += data;
    });

    runProcess.stderr.on("data", (data) => {
      runtimeErrors += data;
    });

    runProcess.on("close", (code) => {
      if (code === 0) {
        resp.send(stdout);
      } else {
        resp.status(500).send(`Runtime error:\n${runtimeErrors}`);
      }
    });
  });
};

module.exports = codeRunner;
