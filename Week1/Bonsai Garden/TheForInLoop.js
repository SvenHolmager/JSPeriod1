//The for in Loop

// Poisoning Object.prototype
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
    console.log(i); // prints both bar and moo since foo inherits from Object.prototype;
}

// still the foo from above
for(var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i);
    }
}