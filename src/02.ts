var fs = require("fs");

function read_file(file_name: string): number[] {
  var text = fs.readFileSync(file_name).toString('utf-8');
  var textByComma = text.split(",");
  var to_number = textByComma.map(text => Number(text));
  return to_number
}

// const add = (x, y) => x + y
// const mult = (x, y) => x * y
// const math = (x, y, f) => f(x, y)
// math(2, 3, add)
// math(2, 3, mult)

// function mutate_array(num1: number, num2: number, callback) {
//   return callback(num1, num2);
// }

function opcode(input: number[]) {
  let new_array = input;
  for (let i = 0; i < new_array.length; i += 4) {
    const num1 = new_array[new_array[i + 1]];
    const num2 = new_array[new_array[i + 2]];

    switch (new_array[i]) {
      case 1: {
        const result = num1 + num2;
        new_array[new_array[i + 3]] = result
        break;
      }
      case 2: {
        const result = num1 * num2;
        new_array[new_array[i + 3]] = result
        break;
      }
      case 99: {
        console.log("Program finished running");
        return new_array;
      }
      default:
        console.log("Error: number not reconized");
        break;
    }
  }
  return new_array;
}

function fix_array(input: number[], num1: number, num2: number) {
  let new_array = [...input];
  new_array[1] = num1;
  new_array[2] = num2;
  return new_array
}

var input = read_file("./src/input_02.txt");
var fixed_array = fix_array(input, 12, 2);
var opcode_array = opcode(fixed_array);
console.log("At position 0 is: " + opcode_array[0]);

function guess_input(input: number[]) {
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const fixed_array = fix_array(input, i, j);
      const opcode_array = opcode(fixed_array);
      if (opcode_array[0] === 19690720) {
        console.log("I: " + i + " J: " + j);
        console.log("100 * noun + verb: " + ((100 * i) + j));
        return;
      }
    }
  }
}

guess_input(input);

export default opcode;