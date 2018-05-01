function Counter(start) {
    var count = start;
    return {
        increment: function(){
            count++;
        },
        get: function() {
        return count;
        }
    }
}

var foo = Counter(4);
foo.increment();
foo.get(); //5
console.log(foo.get()); // got 5

foo.hack = function() {
    foo.count = 1337;
};
console.log(foo.get()); // still 5
//The above code will not change the variable "count" in the scope of "Counter",
//since foo.hack was not defined in that scope.


//Closures inside of loops
for(var i = 0; i< 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} // will output 10, 10x times

//Avoiding the reference problem by using anonymous wrapper
for(var i = 0; i < 10; i++){
    (function(e){
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}

for(var i = 0; i < 10; i++){
    setTimeout(function(e) {
        console.log(e);
    }, 1000, i);
}

//.bind can bind a "this" context and arguments to function, behaves identically to code above
for(var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}

