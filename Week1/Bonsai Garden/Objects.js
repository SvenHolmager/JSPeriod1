//Object Usage and Properties
//Everything can be treated as an object except undefined and null

false.toString(); // 'false'
console.log(false.toString());
[1,2,3].toString(); //'1,2,3'
console.log([1,2,3].toString());

function Foo(){}
Foo.bar = 1;
Foo.bar; // 1
console.log(Foo.bar);

// Number literals can be treated as objects
// 2.toString(); // SyntaxError
2..toString(); // the second point is correctly recognized
2 .toString(); // note the space left to the dot
(2).toString(); // 2 is evaluated first


//Objects as a Data Type
//
var foo = {}; // a new empty object, inherits from Object.prototype
// a new object with a 'test' property with value 12
var bar = {test: 12}; 
console.log(bar.test);


//Accessing Properties
//
var foo = {name: 'kitten'}
foo.name; // kitten
console.log(foo.name);
foo['name']; // kitten
console.log(foo['name']);

var get = 'name';
foo[get]; // kitten
console.log(foo[get]);

//foo.1234; // SyntaxError
foo['1234']; // works
console.log(foo['1234']); // Did not work


//Deleting Properties
var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}

//Notation of Keys
var test = {
    'case': 'I am a keyword, so I must be notated as a string',
    delete: 'I am a keyword, so me too' // raises SyntaxError - Did not raise syntax error
};
console.log(test);