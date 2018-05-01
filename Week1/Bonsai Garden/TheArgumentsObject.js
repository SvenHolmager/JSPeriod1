//Will return an Array containing all the elements of the "arguments" object
//The arguments Object does not inherit from Array.prototype and is a fact and Object
//the arguments object needs to be converted into an Array to get access to array methods.
Array.prototype.slice.call(arguments);
//A slow method, so not recommended to use in performance-critical areas of your code.


//Passing Arguments
// The folliwing is the recommended method of passing arguments from one function to another
function foo() {
    bar.apply(null, arguments);
}
function bar (a,b,c) {
    // do stuff here
}


//Another trick is to use "call" and "apply"
function Person(first, last){
    this.first = first;
    this.last = last;
}

Person.prototype.fullname = function(joiner, options) {
    options = options || { order: "western" };
    var first = options.order === "western" ? this.first : this.last;
    var last =  options.order === "western" ? this.last  : this.first;
    return first + (joiner || " ") + last;
  };

// Create an unbound version of "fullname", usable on any object with 'first'
// and 'last' properties passed as the first argument. This wrapper will
// not need to change if fullname changes in number or order of arguments.
Person.fullname = function() {
    // Result: Person.prototype.fullname.call(this, joiner, ..., argN);
    return Function.call.apply(Person.prototype.fullname, arguments);
};
  
var grace = new Person("Grace", "Hopper");
  
// 'Grace Hopper'
grace.fullname();
console.log(grace.fullname());
  
// 'Turing, Alan'
Person.fullname({ first: "Alan", last: "Turing" }, ", ", { order: "eastern" });
console.log(Person.fullname({ first: "Alan", last: "Turing" }, ", ", { order: "eastern" }));


//Formal Parameters and Arguments indices
//arguments object creates getters and setters for its properties as well as the functions formal parameters.
function foo(a,b,c) {
    arguments[0] = 2;
    a; // 2
    console.log(a);

    b = 4;
    arguments[1]; // 4
    console.log(b);

    var d = c;
    d = 9;
    c; // 3 
    console.log(c);
}
foo(1,2,3);

//Performance Myths and Truths
//The use of the callee function will drastically reduce the performance of modern JS engines.
function boo() {
    arguments.callee; // do something with this function object
    console.log(arguments.callee);
    arguments.callee.caller; // and the calling function object
    console.log(arguments.callee.caller);
}

function bigLoop() {
    for(var i = 0; i < 1; i++) {
        boo(); // would normally be inlined...
        console.log();
    }
}
bigLoop();
//Making use of the arguments.callee or any of its properties is highly discouraged

