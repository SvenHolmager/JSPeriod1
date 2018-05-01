//Function Declarations and Expressions

foo(); // Works because foo was created in the function declaration.

//the Function Declaration
function foo() {}

//The Function Expression
var foo = function() {};

foo; // 'undefined'
// foo(); // this raises a TypeError
var foo = function() {}; // unnamed and anonymous function passed to variable foo
console.log(foo);

var foo = function bar() {
    bar(); // Works
}
console.log(foo);
// bar(); // ReferenceError