//Filter, Map and Reduce
const all = ["Lars", "Peter", "Jan", "Bo", "Sven"];

//A)
console.log("Ex A " +all.join());
console.log("Ex A " +all.join(" "));
console.log("Ex A " +all.join("#"));


//B)
const numbers = [2, 3, 67, 33]; 

function myReducer1(accumulator, currentValue){
    return accumulator + currentValue;
}

const total = numbers.reduce(myReducer1);
console.log("Ex B " + total);


//C)
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];

function myReducerAvg1(arr) {
    let sum = 0;
    for(let i= 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return sum / arr.length
}
console.log("Ex C " + myReducerAvg1(members));

function myReducerAvg2(accumulator, member, index, arr) {
    if (index !== arr.length - 1) {
        return accumulator + member;
    }
    return (accumulator + member) / arr.length;
}
const avg_age = members.map(member => member.age).reduce(myReducerAvg2);
console.log(avg_age);


//D) Copied Assignment for working example.
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

function reducerVotes(a, v) {
    if (a[v]) {
        a[v]++;
    } else {
        a[v] = 1;
    }
    return a;
}
console.log(votes.reduce(reducerVotes, {}));