const fs = require('fs');
const arg2 = process.argv[2];
const content = fs.readFileSync(arg2);
const data = content.toString();
console.log("number of lines: " + data.split("\n").length);

fs.readFile(process.argv[2], function(err,data) { 
    if(err) {
        console.log("Error");
        throw err;
    } 
    else {
        console.log("second to last log");
    }
});
console.log("After?");
