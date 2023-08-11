// const express = require('express');
// const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

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

const codeRunner= async (req,resp,error)=>
{
    const { code, input } = req.body;

    if (!code) {
        return resp.status(400).send('No code provided'); // Added return to prevent further execution
    }

    const codeFileName = 'temp.cpp';
    const inputFileName = 'temp.txt';
    const outputFileName = 'temp.out';
    fs.writeFileSync(codeFileName, code);
    fs.writeFileSync(inputFileName, input);

    exec(`g++ ${codeFileName} -o ${outputFileName}`, (err, stdout, stderr) => {
        if (err) {
            return resp.status(500).send(stderr);
        }
        exec(`./${outputFileName} < ${inputFileName}`, (err, stdout, stderr) => {
            if (err) {
                return resp.status(500).send(stderr);
            }
            resp.send(stdout);
        });
    });
}

module.exports = codeRunner;