//Ex1
const PI = 3.141593;
PI > 3.0;
console.log(PI > 3.0);
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
});
PI > 3.0;
console.log(PI > 3.0);

//Ex2
const evens = [0,2,4,6,8];

const odds  = evens.map(v => v + 1)
//pairs = evens.map(v => ({ even: v, odd: v + 1 }))
//nums  = evens.map((v, i) => v + i)
console.log(odds);

const odds1 = evens.map(function(v) {
    return v+1
  });
console.log(odds1);


//Ex3
//A)
function Numbers1(numbs) {
    const self = this;
    self.nums = numbs;
    self.fives = [];
    self.nums.forEach(function (v) {
      if (v % 5 === 0) {
        self.fives.push(v);
      }
    });
  }

  function Numbers2(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
          this.fives.push(v);
        }
    });
}
const arr = [1,3,5,10,14,20,33,50];
const numbers1 = new Numbers1(arr)
console.log(numbers1.fives);

const numbers2 = new Numbers2(arr);
console.log(numbers2.fives);
  
//B)
const counter = {
    count: 0,
    inc: () => { this.count++ }
}

const func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

//Makes it worse as the function stops counting upwards. 

//Ex4
//Template Literals - The use of Backtick `` and ${} to make string creation easier.
//ES6
const customer = { name: "Foo" }
const card = { amount: 7, product: "Bar", unitprice: 42 }
const message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);

//ES5 
const customer1 = { name: "Foo" };
const card1 = { amount: 7, product: "Bar", unitprice: 42 };
const message1 = "Hello " + customer1.name + ",\n" +
"want to buy " + card1.amount + " " + card1.product + " for\n" +
"a total of " + (card1.amount * card1.unitprice) + " bucks?";
console.log(message1);

//EX5
//A)
/* should produce 
Sum: 7
rest value 1 is a: Boolean
rest value 2 is a: Number
rest value 3 is a: String
rest value 4 is a: Array
rest value 5 is a: Date
rest value 6 is a: Object
*/

function f( x,y,bool,z,n,arr,date,obj ){
    return `
    Sum: ${x+y} 
    Rest Value 1 is a ${bool.constructor.name} 
    Rest Value 2 is a ${z.constructor.name} 
    Rest Value 3 is a ${n.constructor.name} 
    Rest Value 4 is a ${arr.constructor.name} 
    Rest Value 5 is a ${date.constructor.name} 
    Rest Value 6 is a ${obj.constructor.name} 
    `;
}
console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

//B)
const rest = [true,2,"hello World",[1,2,3],new Date(),{}];
const restParams = [ ...rest];
console.log(f(5,2,...restParams)); // It produces the same result.

//C)
const chars = [... f(5,2,...restParams)];
//console.log(chars); //Will produce an array with of every letter used in the above example.


//Ex6
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

const person2 = {fName, lName, age };
console.log(person2);


//Ex7 Destruction Assignment
//A) 

console.log(`First: ${fName}, Last: ${lName}`);


  
