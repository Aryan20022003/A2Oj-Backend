const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', async (req, res) => {
      const { code, input } = req.body;

      // Write the code and input to files
      const codeFilePath = 'code.cpp';
      const inputFilePath = 'input.txt';
      require('fs').writeFileSync(codeFilePath, code);
      require('fs').writeFileSync(inputFilePath, input);

      try {
            // Compile and run the C++ code with a 3-second timeout
            const { stdout, stderr } = await execPromise(`timeout 3s g++ ${codeFilePath} -o code && timeout 3s ./code < ${inputFilePath}`);
            console.log(stdout);
            console.error(stderr);
            res.send(stdout);
      } catch (err) {
            console.error(err);
            if (err.message.includes('exceeded')) {
                  return res.status(522).send('Time limit exceeded');
            } else {
                  return res.status(520).send(`An error occurred while compiling the code. ${err.message}`);
            }
      }
});

function execPromise(command) {
      return new Promise((resolve, reject) => {
            exec(command, (err, stdout, stderr) => {
                  if (err) {
                        reject(err);
                  } else {
                        resolve({ stdout, stderr });
                  }
            });
      });
}

app.listen(3579, () => console.log('Server running on port 3579'));
