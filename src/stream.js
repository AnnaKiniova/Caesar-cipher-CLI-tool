//const stream = require("stream");
//const parseArgs = require("minimist");
const ceasarChipher = require("./crypto.js");
const cliData = require("./cli_input.js");

const fs = require("fs");
const { pipeline } = require("stream");

console.log(cliData.inFile);
pipeline(
  //   // fs.createReadStream(cliData.inFile, "utf-8") : process.stdin, //ead(),
  fs.createReadStream(cliData.inFile, "utf-8"),
  ceasarChipher,
  fs.createWriteStream(cliData.outFile, {
    flags: "a",
    encoding: "utf-8"
  }),

  // cliData.outFile
  //   ? fs.createWriteStream(cliData.outFile, {
  //       flags: "a",
  //       encoding: "utf-8"
  //     })
  //   : process.stdout, //.write(),
  //process.stdout,

  err => {
    if (err) {
      process.stderr.write("pipeline failed");
      process.exit(1);
    } else {
      process.stdout.write("pipeline went ok");
    }
  }
);

// inStream.pipe(outStream).on("error", () => {
//   new Error("file was not written");
// });
