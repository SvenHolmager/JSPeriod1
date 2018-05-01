//Arrray iteration and Properties
//There are no good reason to use the "for in" loop as it is 20x slower than the "for" loop
//The "for in" loop enumerates all the properties that are on the protoype chain

//In this example the list.length gets cached in the l variable and thus the loop only looks up the length once.
//In fact, leaving out the caching may result in the loop being only half as fast as with the cached length
var list = [1, 2, 3, 4, 5,6,7];
for(var i = 0, l = list.length; i < l; i++) {
    console.log(list[i]);
}


//The "length" Property
var arr = [1,2,3,4,5,6];
arr.length = 3;
arr; // [1,2,3]
console.log(arr);

arr.length = 6;
arr.push(4);
arr; // [1,2,3,undefined,undefined,undefined,4]
console.log(arr);
// For the best performance, it is recommended to always use the plain "for" loop and cache the length property. 
// The use of for in on an array is a sign of badly written code that is prone to bugs and bad performance.


// The "Array Constructor"
// Since the Array contructor is ambiguous with how it deals with
// its parameters, it is recommended to use the array literal - [] notation - when creation new arrays.
[1,2,3]; // Result: [1,2,3]
new Array(1,2,3); // Result: [1,2,3]

[3]; // Result: [3]
new Array(3); // Result: []
new Array('3') // Result: ['3]

var arr = new Array(3);
arr[1]; // undefined
1 in arr; //false, the index was not set.
console.log(arr[1])

var arr3 = new Array(5).join("stringToRepeat");
console.log(arr3);