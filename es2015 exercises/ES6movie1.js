var foo = {
    bar: 1,
    baz: 2
};

//var bar = foo.bar; var baz = foo.baz;
//This is the same thing!
var { bar, baz } = foo;


var tenses = ["me", "you", "he"];
//desctructuring
var [ firstPerson, secondPerson ] = tenses;

Promise.all([ promise1, promise2 ]).then(function([results1, results2]) {
    var [ results1, results2 ] = results;
});

var foo1 = 2;
var obj = {
   bar1: 1,
   foo1, 
}

var name = "Sven";
var age = 30;

some.method({ name, age });
{
    name: name
   // age: age
};

var obj = {
    // using value to generate key.
    ["name" + name]: "some value"
    //same a going nameSven: "some value" - you cannot do this as easy. unless you do the following:
}
var obj2 = {};
obj["name"+name] = "some value"

//desctructoring arguments
function calcBmi ({ weight: w, height: h, max = 25, callback }) {
    var bmi = weight = Math.pow(height, 2);
    if(bmi > max) {
        console.log("you're overweight");
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi({ weight, height, max: 20 });
calcBmi({ weight, height, callback: function() {} });


// Template strings

var name = "will";
var things = "party"
var greet = "hi, my name is " + name + " and I like to " + thing + ".";

var greet2 = `hi, my name is ${name}
            and I like to ${party}`