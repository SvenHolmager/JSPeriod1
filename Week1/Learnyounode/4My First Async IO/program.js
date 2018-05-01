const fs = require('fs');
const arg2 = process.argv[2];


const buffer = fs.readFileSync(arg2);


const buffer = fs.readFile(arg2,function(err,data) {
    if(err) {
        console.log("Error");
        throw err;
    } 
    else {
        console.log(data.split("\n").length-1);
    }
});

