//Scopes and Namespaces
//No distinct namespaces in JavaScript, which means that 
//everything gets defined in one globally shared namespace

function test() { // a scope
    for(var i = 0; i < 10; i++) {
        //count
    }
    console.log(i) // 10
}

//The Bane of Global Variables

// script A, defines variable called foo in global scope
foo = '42';
// script B, defines variable called foo in current scope
var foo = '42';


// global scope
var items = [/*some list*/];
for(var i = 0; i < 3; i++) {
    subLoop();
}
function subLoop(){
    // scope of subLoop
    for(i = 0; i < 5; i++) { // missing var statement
        console.log("amazing stuff")
    }
}
//the subLoop will override the global value of i,
//therefore the mainloop only runs once.

//Local Variables
//global scope
var foo = 1;
var bar = 2;
var i = 2;

function test1(i){
    // local scope of the function test
    i = 5;

    var foo = 3;
    bar = 4;
}
test1(10);
console.log(foo); // 1
console.log(bar); // 4 
console.log(i); // 2


//Hoisting
//Javescript hoist declarations
// bab(); - TypeError bab is undefined
var bab = function() {};
var someValue = 42;

test2();
function test2(data) {
    if (false) {
        goo = 1;
    } else {
        var goo = 2;
    }
    for(var i = 0; i <100; i++) {
       // var e = data[i];
    }
}

//After Hoisting
// var statements got moved here
var bar, someValue; // default to 'undefined'

// the function declaration got moved up too
function test3(data) {
    var goo, i, e; // missing block scope moves these here
    if (false) {
        goo = 1;

    } else {
        goo = 2;
    }
    for(i = 0; i < 100; i++) {
      //  e = data[i];
    }
}

//bar(); -  // fails with a TypeError since bar is still 'undefined'
someValue = 42; // assignments are not affected by hoisting
bar = function() {};
test3();


// Check whether someImportatntThing has been initialized
if (!SomeImportantThing) {
    var SomeImportantThing = {};
}

//the var statement gets moved to the top with hoisting so it will look like this.
var someImportantThing;
// other code might initialize SomeImportantThing here, or not
// make sure it's there
if (!SomeImportantThing) {
    SomeImportantThing = {};
}


//Namespaces
(function() {
    // a self contained "namespace"

    window.foo = function() {
        // an exposed closure
    };

})(); // execute the function immediately

//Unnamed functions are considered expressions, so in order to be callable, they must first be evaluated.
( // evaluate the function inside the parentheses
function(){}
) // and return the function object
() // call the result of the evaluation

// A few other styles for directly invoking the function expression.
!function(){}()
+function(){}()
(function(){}());
// and so on.