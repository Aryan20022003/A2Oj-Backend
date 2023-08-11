const axios = require("axios");
require("dotenv").config();
const codeRunner = async (req, res) => {
  const { code, input } = req.body;
  console.log(code);
  console.log(input);
  console.log("entered code runner");
  axios
    .post("https://a3f8-185-207-250-57.ngrok-free.app/run", {
      code: code,
      input: input,
    })
    .then((resp) => res.send(resp.data))
    .catch((err) => res.send(err.message));
};
module.exports = codeRunner;
