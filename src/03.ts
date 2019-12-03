var fs = require("fs");

function read_file(file_name: string): object {
  var text = fs.readFileSync(file_name).toString('utf-8');
  console.log("text: ", text);
  var textByLine = text.split("\n");
  console.log("textByLine: ", textByLine);
  var textByComma = textByLine.map(item => item.split(",").map(coord => { 
      const dir = coord.slice(0, 1);
      const dist = coord.slice(1);
      return 
    }));
  console.log("textByComma: ", textByComma);
  return textByComma
}

// make grid
var grid = {
    A: {
        0: {
            1: 0, 2: 0
        },
        1: {
            1: 0, 2: 0
        },
        2: {
            1: 0, 2: 0
        },
        3: {
            1: 0, 2: 0
        },
        4: {
            1: 0, 2: 0
        }
    },
    B: {
        0: {
            1: 0, 2: 0
        },
        1: {
            1: 0, 2: 0
        },
        2: {
            1: 0, 2: 0
        },
        3: {
            1: 0, 2: 0
        },
        4: {
            1: 0, 2: 0
        }
    }
}

// read instructions and change the grid when they passe through a point => 0 to 1

// loop through the new hash and get all points where there was an instersection => { 1: 1, 2: 1 }

// Calculate the manhatan distance from all of the points and return the one closer to the start point

var input = read_file("./src/input_03.txt");

// export default opcode;