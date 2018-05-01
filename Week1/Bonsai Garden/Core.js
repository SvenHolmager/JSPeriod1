
// Why not to use "eval"
//The eval function will execute a string of javascript code in the local scope.

var number = 1;
function test1() {
    var number = 2;
    eval('number = 3');
    return number;
}
test1();
console.log(test1());
number;
console.log(number);


var number = 1;
function test2() {
    var number = 2;
    var copyOfEval = eval;
    copyOfEval('number = 3');
    return number;
}
test2();
console.log(test2());
number;
console.log(number);
//The use of "eval" should be avoided. 99.9% of its uses can be achieved without it.


//"undefined" and "null"
//To protect code against a possible overwritten undefined variable, a common technique used is to add an additional parameter to an anonymous wrapper that gets no argument passed to it.
var undefined = 123;
(function(something, foo, undefined) {
    // undefined in the local scope does 
    // now again refer to the value `undefined`
    console.log(something + " " +foo)

})('Hello World', 42);

//The same effect with declaration inside of wrapper
var undefined = 123;
(function(something, foo) {
    var undefined;
    console.log(something + " " +foo)
})('Hello World', 42);


//Automatic Semicolon Insertion
//Considered one of the biggest design flaws in the language cause it can change the behavior of code.
var foo = function() {
} // parse error, semicolon expected
test()

// Insertion happens, and the parser tries again.
var foo = function() {
}; // no error, parser continues
test()


//How it Works
//The code below has no semicolons in it, so it is up to the parser to decide where to insert them.
(function(window, undefined) {
    function test(options) {
        log('testing!')

        (options.list || []).forEach(function(i) {

        })

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        )

        return
        {
           // foo: function() {} // to prevent error
        }
    }
    window.test = test

})(window)

(function(window) {
    window.someLibrary = {}

})(window)

//Below is the result of the parsers "guessing" game.
(function(window, undefined) {
    function test(options) {

        // Not inserted, lines got merged
        log('testing!')(options.list || []).forEach(function(i) {

        }); // <- inserted

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        ); // <- inserted

        return; // <- inserted, breaks the return statement
        { // treated as a block

            // a label and a single expression statement
            // foo: function() {} // to prevent error
        }; // <- inserted
    }
    window.test = test; // <- inserted

// The lines got merged again
})(window)(function(window) {
    window.someLibrary = {}; // <- inserted

})(window); //<- inserted


//THE "DELETE" OPERATOR
// global variable:
//variables and functions have the properties called DontDelete. it is set when declared

var a = 1; //DontDelete is set
delete a; //false
a; // 1

// normal function:
function f() {} // DontDelete is set
delete f; //false
typeof f; // "function"

//reassigning doesn't help:
f = 1;
delete f; //false
f; // 1

//Explicit properties
// explicitly set properties can be deleted:
var obj = {x: 1};
obj.y = 2;
delete obj.x; // true
delete obj.y; // true
obj.x; // undefined
obj.y; // undefined

//In the example above, obj.x and obj.y can be deleted because they have no DontDelete attribute. 
//That's why the example below works too.

// this works fine, except for IE:
var GLOBAL_OBJECT = this;
GLOBAL_OBJECT.a = 1;
a === GLOBAL_OBJECT.a; // true - just a global var
delete GLOBAL_OBJECT.a; // true
GLOBAL_OBJECT.a; // undefined


// Function arguments and built-ins
// Functions' normal arguments, "arguments" objects amd built-in properties also have "DontDelete" set.

// function arguments and properties:
(function (x) {

    delete arguments; // false
    typeof arguments; // "object"
  
    delete x; // false
    x; // 1
  
    function f(){}
    delete f.length; // false
    typeof f.length; // "number"
  
  })(1);