function Person(name) {
    this.name = name;
}

Person.prototype.logName = function () {
    console.log(this.name);
};

var sean = new Person();
console.log();


function Car() {
    return 'ford';
}
new Car(); //a new object, not 'ford'

function Person() {
    this.someValue = 2;
    return  {
        name: 'Charles'
    };
}
new Person(); // the returned object ( {name:'Charles'} ), not including someValue
console.log(new Person);


//when the "new" keyword is ommitted, the function wil not return a new object
function Pirate(){
    this.hasEyePatch = true; // gets set on the global object!
}
var somePirate = Pirate(); // somePirate is undefined
console.log(somePirate);
var somePirate1 = new Pirate(); // this works - "Pirate { hasEyePatch: true }""
console.log(somePirate1);


//Factories, to omit the "new" keyword, the contructor function has to explicitly return a value
function Robot() {
    var color = 'gray';
    return {
        getColor: function() {
            return color;
        }
    }
}
new Robot();
Robot();
console.log(new Robot());
console.log(Robot());

var k = new Robot();
console.log(k.getColor());
console.log(Robot().getColor());
console.log(new Robot().getColor());

//Creating New Objects via Factories
function CarFactory() {
    var car = {};
    car.owner = 'nobody';

    var milesPerGallon = 2;

    car.setOwner = function(newOwner) {
        this.owner = newOwner;
    }

    car.getMPG = function() {
        return milesPerGallon;
    }
    return car;
}
console.log(CarFactory());