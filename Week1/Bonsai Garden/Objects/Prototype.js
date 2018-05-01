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
//    test [instance of Bar]
//        Bar.prototype [instance of Foo]
//            { foo: 'Hello World' }
//           Foo.prototype
//               { method: ... }
//               Object.prototype
//                   { toString: ... /* etc. */ }

function Foo() {}
Foo.prototype = 1; // no effect as 1 is a primitive and primitives cannot be assigned to prototype

// Poisoning Object.prototype
Object.prototype.bar = 1;
var foo = {goo: undefined};

foo.bar; // 1
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false
foo.hasOwnProperty('goo'); // true