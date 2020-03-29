const { Command } = require("commander");
const command = new Command();
command.version("0.0.1");

let inFile;
let outFile; // "./out.txt";
let action;
let amount;

command
  .requiredOption("-s, --shift <string>")
  .option("-i, --input <string>")
  .option("-o, --output <string>")
  .requiredOption("-a, --action <string>");

command.parse(process.argv);

if (command.shift) {
  if (parseInt(command.shift, 10)) {
    amount = Math.abs(command.shift);
  } else {
    process.stderr.write("invalid data type for shift");
    process.exit(1);
  }
}
if (command.input) {
  inFile = command.input;
}
if (command.output) {
  outFile = command.output;
}
if (command.action == "encode" || command.action == "decode") {
  action = command.action;
} else {
  process.stderr.write("error");
  return;
}

console.log(amount);
console.log(inFile);
console.log(outFile);
console.log(action);

module.exports.amount = amount;
module.exports.inFile = inFile;
module.exports.outFile = outFile;
module.exports.action = action;
