const fs = require('fs');
const arg2 = process.argv[2];

fs.readFile(arg2,function(err,data) {
    if(err) {
        console.log("Error");
        throw err;
    } 
    else {
        const lines = data.toString().split("\n").length-1;
        console.log(lines);
    }
});
