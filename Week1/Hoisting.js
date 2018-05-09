//HOISTING
//Variable and function declarations are completely hoisted.

//Example1
var x; 

function hoistingCheck(){
    return y;
}

console.log(hoistingCheck());  // Value y is not yet set and therefore undefined

var y = 5;

console.log(hoistingCheck()); // Value y is not undefined anymore

//Example2
function hoistingCheck2(){ 
    return boo(); // Function declaration is hoisted
}

console.log(hoistingCheck2()) 

function boo () { 
    console.log("Hey")
    return 10;
}
