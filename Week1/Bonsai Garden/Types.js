//Equality and Comparisons

// The Equality Operator
//Javascript features weak typing. This means that the equality operator coerces types in order to compare them
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true
// above result of type coersion. Main reasons why "==" is regarded as bad practice.
//Hard to track down bugs due to conversion rules.
//performance impact when converting.


//The Strict Equality Operator
//consists of three equal signs "==="
//{} === {};                   // false
new String('foo') === 'foo'; // false
new Number(10) === 10;       // false
var foo = {};
foo === foo;                 // true
//Behave different than "==" when at least one of the operands is an object
//compares identity/instance of object, not equality.


//The "typeof" Operator
/*
The typeof operator (together with "instanceof") is probably the biggest design flaw of JavaScript, as it is almost completely broken.
Although "instanceof" still has limited uses, typeof really has only one practical use case, which does not happen to be checking the type of an object.

Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object
*/

//The Class of an Object
//The only way to determine an object's [[Class]] value is using Object.prototype.toString. It returns a string in the following format: '[object ' + valueOfClass + ']', e.g [object String] or [object Array]:
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8,-1);
    return obj !== undefined && obj !== null && clas === type;
}

console.log(is('String', 'test')); // true
console.log(is('String', new String('test'))); //true

//Testing for Undefined variables
typeof foo !== 'undefined'
//The above will check whether foo was actually declared or not; just referencing it would result in a ReferenceError. This is the only thing typeof is actually useful for.


//The "instanceof" Operator
//Compares the constructors of its two operands.
function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true
console.log(new Bar() instanceof Bar);
console.log(new Bar() instanceof Foo);

// This just sets Bar.prototype to the function object Foo,
// but not to an actual instance of Foo
Bar.prototype = Foo;
new Bar() instanceof Foo; // false
console.log(new Bar() instanceof Foo);


//Using "instanceof" with Native Types
new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true
console.log(new String('foo') instanceof String)
console.log(new String('foo') instanceof Object)

'foo' instanceof String; // false
'foo' instanceof Object; // false
console.log('foo' instanceof String)
console.log('foo' instanceof Object)


//Type Casting
//These are true
new Number(10) == 10; // Number object is converted
                      // to a number primitive via implicit call of
                      // Number.prototype.valueOf method

10 == '10';           // Strings gets converted to Number
10 == '+10 ';         // More string madness
10 == '010';          // And more 
isNaN(null) == false; // null converts to 0
                      // which of course is not NaN

// These are false
10 == 010;
10 == '-10';
//To avoid these issues, the use of the strict equal operator is highly recommended "==="

//Constructors of Built-in Types
new Number(10) === 10;     // False, Object and Number
Number(10) === 10;         // True, Number and Number
new Number(10) + 0 === 10; // True, due to implicit conversion

//It is best to cast to one of the three possible types explicitly
//Casting to a String
'' + 10 === '10'; // true
console.log('' + 10 === '10');

//Casting to a Number
+'10' === 10; // true
console.log(+'10' === 10); // true

//Casting to a Boolean
//By using the not operator twice, a value can be converted to a boolean.
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true