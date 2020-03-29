//const stream = require("stream");
//const parseArgs = require("minimist");
const ceasarChipher = require("./crypto.js");

const fs = require("fs");
const { pipeline } = require("stream");

//const zlib = require("zlib");

const inFile = "./in.txt";
const outFile = "./out.txt";

//const inStream = fs.createReadStream("./in.txt");
//const outStream = fs.createWriteStream("./out.txt");
// inStream.on("data", chunk => {
//   console.log(chunk.length);
// });
// stream.on("test", () => {
//   return "test";
// });

pipeline(
  fs.createReadStream(inFile, "utf-8"),
  //   zlib.createGzip(),
  //test(),
  //fs.createWriteStream("./out.txt", "utf-8"),
  ceasarChipher,
  fs.createWriteStream("./out.txt", {
    flags: "a",
    encoding: "utf-8"
  }),
  //process.stdout,
  err => {
    if (err) {
      process.stderr("pipeline failed");
    } else {
      console.log("pipeline went ok");
    }
  }
);

// inStream.pipe(outStream).on("error", () => {
//   new Error("file was not written");
// });
