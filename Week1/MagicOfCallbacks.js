const numbers = [1,4,6,7,9];
const names = ['Sven', 'Lars', 'Jan', 'Bo', 'Frederik', 'Carsten'];

//Example 1.
//Mapping method  - standard
const namesUpperCase1 = names.map(name => name.toUpperCase());
console.log("Ex1: " + namesUpperCase1);

// Filter method - standard 
const longNames1 = names.filter(name => name.length > 4);
console.log("Ex1: " + longNames1);


//Example 2.
//Mapping method - custom
function myMap1(arr, cb) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

// Filter method - custom
function myFilter1(arr, cb) {
    let newArr = [];
    for(let i= 0; i < arr.length; i++) {
        if(cb(arr[i])){
        newArr.push(arr[i]); 
        }
    }
    return newArr;
}

const newArr1 = myMap1(names, name => name.toUpperCase())
console.log("Ex2: " + newArr1);

const newArr2 = myFilter1(names, name => name.length > 4);
console.log("Ex2: " + newArr2);


//Example 3.
//Prototype Property
Array.prototype.myMap = function(cb) {
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

Array.prototype.myFilter = function(cb) {
    let newArr = [];
    for(let i= 0; i < this.length; i++) {
        if(cb(this[i])){
        newArr.push(this[i]); 
        }
    }
    return newArr;
}

const newArr3 = names.myMap(name => name.toUpperCase());
console.log("Ex3: " + newArr3);

const newArr4 = names.myFilter(name => name.length > 4);
console.log("Ex3: " + newArr4);


//Example 4.
//Filter and Map 
// A)
const newArr5 = names.map((n)=>"<li>" +n+"</li>")
console.log("Ex4a: " + "<ul>" + newArr5.join(" ") + "</ul>");

// Getting comfortable with filter and Map
// B)
const names2 = [
    {name:"Lars",phone:"1234567"}, 
    {name: "Sven",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Bo", phone: "79345"}];

const tableString = "<table><tr><th>Name:</th><th>Phone:</th></tr>" 
    + names2.map(obj => "<tr><td>" + obj.name +"</td><td>" + obj.phone +"</td></tr>").join("") + "</table>";
console.log("Ex4b: " + tableString);

// HTML example
// C)
if (typeof document !== 'undefined') {
    document.getElementById("names").innerHTML = tableString;
}


// Add Button
// D) 
if (typeof document !== 'undefined') {
    function filterFunc() {
        let filteredNames = names2.filter(obj => obj.name.length > 3 )
        let tableString2 = "<table><tr><th>Name:</th><th>Phone:</th></tr>" 
        + filteredNames.map(obj => "<tr><td>" + obj.name +"</td><td>" + obj.phone +"</td></tr>").join("") + "</table>";
    
        document.getElementById("names").innerHTML = tableString2;
    }

    document.getElementById("button1").addEventListener('click', filterFunc)
}

