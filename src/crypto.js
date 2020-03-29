const { Transform } = require("stream");

const ceasarChipher = new Transform({
  transform: (chunk, encoding, done) => {
    let str = chunk.toString();
    const amount = 5;
    let result = "";
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      let element = chunk[i];
      let add = "";
      // if (element.toString().match(/[a-z]/i)) {
      //   //var code = str.charCodeAt(i);

      if (element >= 65 && element <= 90)
        add = String.fromCharCode(((element - 65 + amount) % 26) + 65);
      else if (element >= 97 && element <= 122)
        add = String.fromCharCode(((element - 97 + amount) % 26) + 97);
      else {
        add = String.fromCharCode(element);
      }
      result += add;
    }

    // console.log(result);
    done(null, result);
  }
});

//const x = new ceasarChipher();
//x.transform("hello", "utf-8");
module.exports = ceasarChipher;
