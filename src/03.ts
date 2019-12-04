var fs = require("fs");

function read_file(file_name: string): object {
    var text = fs.readFileSync(file_name).toString('utf-8');
    var textByLine = text.split("\n");
    var textByComma = textByLine.map(item => item.split(",").map(coord => {
        const dir = coord.slice(0, 1);
        const dist = coord.slice(1);
        return { dir: dir, dist: dist }
    }));
    return { wire1: textByComma[0], wire2: textByComma[1] }
}

function make_wire(wire: object[]) {
    let coord: any = [0, 0];
    let response: any = [[0, 0]];

    for (let i = 0; i < wire.length; i++) {
        if (wire[i]["dir"] == "U") {
            for (let j = coord[1] + 1; j < wire[i]["dist"]; j++) {
                let coord_x: any = coord[0];
                let coord_y: any = coord[1] + 1;
                let coordenates: any = [coord_x, coord_y];
                response << coordenates;
            }
        }
        if (wire[i]["dir"] == "D") {
            for (let j = coord[1] + 1; j < wire[i]["dist"]; j--) {
                let coord_x: any = coord[0];
                let coord_y: any = coord[1] - 1;
                let coordenates: any = [coord_x, coord_y];
                response << coordenates;
            }
        }
        if (wire[i]["dir"] == "R") {
            for (let j = coord[0] + 1; j < wire[i]["dist"]; j++) {
                let coord_x: any = coord[0] + 1;
                let coord_y: any = coord[1];
                let coordenates: any = [coord_x, coord_y];
                response << coordenates;
            }
        }
        if (wire[i]["dir"] == "L") {
            for (let j = coord[0] - 1; j < wire[i]["dist"]; j--) {
                let coord_x: any = coord[0] - 1;
                let coord_y: any = coord[1];
                let coordenates: any = [coord_x, coord_y];
                response << coordenates;
            }
        }
    }
    return response;
}

const wire1 = [{ dir: 'R', dist: '3' }, { dir: 'U', dist: '4' }, { dir: 'L', dist: '1' }]
const wire2 = [{ dir: 'U', dist: '2' }, { dir: 'R', dist: '4' }, { dir: 'D', dist: '1' }]

const wire1_path = make_wire(wire1);
const wire2_path = make_wire(wire2);

console.log("wire1_path: ", wire1_path);
console.log("wire2_path: ", wire2_path);

// read instructions and change the grid when they pass through a point => 0 to 1
function draw_path(wire1: object[], wire2: object[]): number[][] {
    // const wire2 = [{ dir: 'U', dist: '2' }, { dir: 'R', dist: '4' }, { dir: 'D', dist: '1' }]
    const wire1_path = make_wire(wire1);
    const wire2_path = make_wire(wire2);
    let response: any = []
    for (let i = 0; i < wire1_path.length; i++) {
        if (wire2_path.includes(wire1_path[i])) {
            response << wire1_path[i]
        }
    }
    return response
}

// loop through the new hash and get all points where there was an instersection => { 1: 1, 2: 1 }

// Calculate the manhatan distance from all of the points and return the one closer to the start point

var input = read_file("./src/input_03.txt");

export default draw_path;