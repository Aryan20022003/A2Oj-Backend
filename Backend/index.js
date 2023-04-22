const express = require('express');
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/run', async (req, res) => {
      const { code, input } = req.body;
      console.log(code); console.log(input);
      var program = {
            script: code,
            language: "cpp17",
            versionIndex: "0",
            stdin: input,
            clientId: "857e060c5620048e16181c905d8a0688",
            clientSecret:
                  "3a9af02cba6007f067445d80c458c4a90acd9dcfc740079fc3a20e204961b1fe",
      };
      axios
            .post(
                  "https://api.jdoodle.com/v1/execute",
                  program
            ).then((result) => {
                  console.log(result.data.output);
                  res.send(result.data.output);
            }
            ).catch((err) => {
                  console.log(err.output);
                  res.send(err.output);
            });
});

app.get("/isitworking", (req, res) => {
      res.send("pong");
});

app.listen(3579, () => console.log('Server running on port 3579'));
