var fs = require("fs");

function read_file(file_name: string): number[] {
  var text = fs.readFileSync(file_name).toString('utf-8');
  var textByLine = text.split("\n");
  var to_number = textByLine.map(text => Number(text))
  return to_number
}

function opcode(input: number[]) {

}

var input = read_file("./src/input_02.txt");
