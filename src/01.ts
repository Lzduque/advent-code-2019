// 0q - Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
var fs = require("fs");

function read_file(file_name: string): number[] {
  var text = fs.readFileSync(file_name).toString('utf-8');
  var textByLine = text.split("\n");
  var to_number = textByLine.map(text => Number(text))
  return to_number
}

function module_fuel(mass: number): number {
  return Math.floor(mass / 3) - 2
}

function calculate_for_all(input: number[]): number {
  return input.reduce((a, b): number => {
    return a + module_fuel(b)
  }, 0)
}

var input = read_file("./src/input_01.txt");
console.log("Total fuel is: " + calculate_for_all(input))

export default module_fuel;