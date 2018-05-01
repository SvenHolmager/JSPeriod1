//"setTimeout" and "setInterval"

function foo() {}
var id = setTimeout(foo, 1000); // returns a Number > 0
console.log(id);

function Foo() {
    this.value = 42;
    this.method = function() {
        //this refers to the global object
        console.log(this.value); //will log undefined
    };
    setTimeout(this.method, 500);
}
new Foo();


//Stacking Calls with setInterval
function foo1() {
    console.log("foo1")
}
setInterval(foo1, 2000)

//Dealing with possible blocking code
//This is better than the above code as foo itself can now decide if it wants to run again or not.
//Encapsulates the code.
function foo2() {
    console.log("foo2")
    setTimeout(foo2, 2000)
}
foo2();

//Manually clearing Timeouts
var id = setTimeout(foo1, 100);
clearTimeout(id);

//Clear "all" timeouts
for(var i = 1; i < 1000; i++) {
    clearTimeout(i);
}

//Clear "all" timeouts
var biggestTimeoutId = window.setTimeout(function(){}, 1), i;
for(i = 1; i <= biggestTimeoutId; i++) {
    clearTimeout(i);
}


//Hidden use of eval
function foo() {
    //will get called
}
function bar() {
    function foo() {
        // never gets called
    }
    setTimeout('foo()', 1000);
}
bar();

function foo(a, b, c) {}

// NEVER use this
setTimeout('foo(1, 2, 3)', 1000)

// Instead use an anonymous function
setTimeout(function() {
    foo(1, 2, 3);
}, 1000)