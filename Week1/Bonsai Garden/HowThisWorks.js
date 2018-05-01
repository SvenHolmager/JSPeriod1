 // The Global Scope
 //When using "this" in global scope, it will simply refer to the global object.
this;
foo = {};
var foo = function() {};
var test = function() {};
test.foo = foo;
//Calling a function
//Here, "this" will again refer to the global object.
foo();

// Calling a Method
test.foo();
// In this example, "this" will refer to test.

//Calling a Constructor
new foo();
//inside the function "this" will refer to the new created Object

// Explicit Setting of "this"
function foo(a,b,c) {}
var bar = {}
foo.apply(bar, [1,2,3]); // array will expand to the below
foo.call(bar,1,2,3) // results in a=1, b=2, c=3

// Does not apply to prototypes.
Foo.method1 = function() {
    function test1() {
        console.log("test1");
        // this is set to the global object
    }
    test1();
}
Foo.method2 = function(){
    var self = this;
    function test2() {
        console.log("test2");
        // use self instead of this here
    }
    test2();
}

//As of ECMAScript 5
Foo.method3 = function(){
    var test3 = function() {
        console.log("test3");
        // this now refers to Foo
    }.bind(this);
    test3();
}


//Assigning Methods
var test4 = Foo.method3;
test4();


// prototypal inheritance 
function Foo() {}
Foo.prototype.method = function() {};

function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method();
console.log(new Bar().method())