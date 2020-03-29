const { Transform } = require("stream");
const cliData = require("./cli_input.js");

const ceasarChipher = new Transform({
  transform: (chunk, encoding, done) => {
    let str = chunk.toString();
    let result = "";
    for (var i = 0; i < str.length; i++) {
      let element = chunk[i];
      let add = "";
      if (cliData.action === "encode") {
        step = cliData.amount;
      } else if (cliData.action === "decode") {
        step = 26 - (cliData.amount % 26);
      }

      if (element >= 65 && element <= 90) {
        add = String.fromCharCode(((element - 65 + step) % 26) + 65);
      } else if (element >= 97 && element <= 122)
        add = String.fromCharCode(((element - 97 + step) % 26) + 97);
      else {
        add = String.fromCharCode(element);
      }
      result += add;
    }
    done(null, result);
  }
});

module.exports = ceasarChipher;
