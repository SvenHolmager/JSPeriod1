const fs = require('fs');
const arg2 = process.argv[2];

const buffer = fs.readFileSync(arg2);
const data = buffer.toString();

console.log(data.split("\n").length-1);