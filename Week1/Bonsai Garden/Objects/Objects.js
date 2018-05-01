//
// OBJECT USAGE AND PROPERTIES

false.toString(); // 'false'
[1, 2, 3].toString(); // '1,2,3'

function Foo(){}
Foo.bar = 1;
Foo.bar; // 1

// 2.toString(); // raises syntaxError
2..toString(); // the second point us correctly recognized
2 .toString(); // note the space left to the dot
(2).toString(); // 2 is evaluated first




//
// OBJECTS AS A DATA TYPE

var foo = {}; // a new empty object

//a new object with a 'test' property with value 12
var bar  = {test: 12};

//
// Accessing Properties

var foo = {name: 'kitten'}
foo.name; //kitten
foo['name']; //kitten

var get = 'name';
foo[get]; //kitten

//foo.1234; //syntaxError 
foo['1234']; //works


//
// Deleting Properties

var obj = {
    bar: 1,
    foo: 2,
    dax: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.dax;

for(var i in obj){
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}

var test = {
    'case': 'I am a keyword, so I must be notated as a string',
    delete: 'I am a keyword, so me too' // raises syntaxError prior to ECMAScript 5, which is standard today.
}
console.log(test.case);
console.log(test.delete); // Did not raise syntax error.! So version we are running is at least ECMAScript 5.
