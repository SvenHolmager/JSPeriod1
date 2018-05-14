//Block Scoping
//blocks are loops, if statements etc.
//let is the new var;

var a = 1;

if (true) {
    var b = 2; // globally scoped
    let c = 3; // block scoped
    const bar = 3
}
console.log(b); //2
//console.log(c); // c is not defined as c is only seen in the loop due to let.
//console.log(bar); // the same as c

const foo = 1;
if (true) {
    const bar = {a: 1};
    bar.a = 2; // bar can be mutated by mutating its values.
}


//Classes are huge deal now.
//First old way
function Parent () {
    //constructor
}
Parent.prototype.foo = function() {};
Parent.prototype.bar = function() {};

//New way to define classes
class Parent1 {
    constructor(){

    }

    foo() {
        console.log("foo function in parent")
    }

    static bar() {
    }
}

const p1 = new Parent1();
p1.foo();

class Child extends Parent {
    constructor() {
        super()
    }

    baz() {
        console.log("baz function in child")
    }
}

const child = new Child();
child.foo();
child.baz();


//Arrow functions
var foo2 = function(a,b) {
    return a+b;
}
var foo3 = (a,b) => { return a+b; }

foo3.something((a,b) => { return a+b; });

//implicit return
foo3.something((a,b) => a+b);
foo3.something2(a => a++);

[0,1,2].map(val => val++); // [1, 2, 3];

var module = {
    age: 30,
    foo: function() {
        console.log(this.age);
    }
}

module.foo(); //30

var module1 = {
    age: 30,
    foo: function() {
        setTimeout(function(){
            console.log(this.age);
        }.bind(this), 100);
    }
};

module1.foo(); //30

//Arrow function automatically binds (this) to the anonymous function
var module2 = {
    age: 30,
    foo: function() {
        setTimeout(() => {
            console.log(this.age);
        }, 100);
    }
};
module2.foo(); //30

//Jquery
//whatever the value of this is here
$("some-thing").with().jQuery(() => {
    $(this)
});


//modules

module.exports.foo = function() {
};
module.exports.bar = function() {
};

module.exports = function() {

}

export default function() {};
export function bar() {};
export var foo = 3;

//place these are the top of the file.
import myModule from "myModule";
import {each, omit} from "lodash";
import {foo as foolish, bar} from "myModule";
console.log(foolish); // 3
