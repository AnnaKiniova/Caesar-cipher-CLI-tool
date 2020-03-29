const ceasarChipher = require("./crypto.js");
const cliData = require("./cli_input.js");
const { promisify } = require("util");

const fs = require("fs");
const stream = require("stream");
const pipeline = promisify(stream.pipeline);

const readStream = cliData.inFile
  ? fs.createReadStream(cliData.inFile, "utf-8").on("error", () => {
      process.stderr.write("can't reach specified input file");
      process.exit(1);
    })
  : process.stdin;

const writeStream = cliData.outFile
  ? fs
      .createWriteStream(cliData.outFile, {
        flags: "a",
        encoding: "utf-8"
      })
      .on("error", () => {
        process.stderr.write("can't reach specified output file");
        process.exit(1);
      })
  : process.stdout;

pipeline(readStream, ceasarChipher, writeStream)
  .then(() => process.stdout.write("pipeline went ok"))
  .catch(() => process.stderr.write("pipeline failed"));
