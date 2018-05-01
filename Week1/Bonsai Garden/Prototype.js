// Prototypes

function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function() {}
};

function Bar() {}

// Set Bar's prototype to a new instance of Foo
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// Make sure to list Bar as the actual constructor
Bar.prototype.constructor = Bar;

var test = new Bar(); // create a new bar instance

// The resulting prototype chain
// test [instance of Bar]
//     Bar.prototype [instance of Foo]
//         { foo: 'Hello World' }
//         Foo.prototype
//             { method: ... }
//             Object.prototype
//                 { toString: ... /* etc. */ }


//The Prototype Property
function Foo() {}
Foo.prototype = 1; //no effect
console.log(Foo.prototype); // It did have an effect
//Do not extend Object.prototype


// Poisoning Object.prototype
Object.prototype.bar = 1;
var foo = {goo: undefined};
console.log(Object.prototype.bar); 

foo.bar; // 1
console.log(foo.bar);
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false
console.log(foo.hasOwnProperty('bar'));
foo.hasOwnProperty('goo'); // true
console.log(foo.hasOwnProperty('goo'));

// hasOwnProperty as a Property
//
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false
console.log(foo.hasOwnProperty('bar')); // returned false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true
console.log(({}).hasOwnProperty.call(foo, 'bar'));

// It's also possible to use hasOwnProperty from the Object
// prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
console.log(Object.prototype.hasOwnProperty.call(foo, 'bar'));