const fs = require('fs');
const arg2 = process.argv[2];

const buffer = fs.readFileSync(arg2);
const data = buffer.toString();

var lines = data.split("\n").length-1

console.log(lines);