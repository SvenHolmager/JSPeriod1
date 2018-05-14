//generator function
//A huge new functionality - Adds a lot of power to JS

//traceur
var myGen = function*() {
    var one = yield $.get('/api/friends'); //'John'
    var two = yield $.get('/api/profile');
    var three = yield $.get('/api/tweets');
    console.log(one, two, three);
};
var gen = myGen(); //get the generator ready to run;

console.log(gen.next()); // {value:1, done: false}
console.log(gen.next(4)); // {value:2, done: false}
console.log(gen.next(5)); // {value:3, done: false}
console.log(gen.next('a')); // {value:undefined, done: true}
console.log(gen.next()); // {value: 1, done: false}


//Seem pointless?
//It's not!

//give me a generator
function smartCode(generator) {
    //get the generator ready to run
    var gen = generator();
    //get my first yielded value
    var yieldedVal = gen.next();
    //if it's a promise, wait for it to fulfull and pass the value back into the generator
    if(yieldedVal.then) {
        //its a promise
        yieldedVal.then(gen.next);
    }
}

Promise.coroutine1(function* () {
    var tweets = yield $.get('tweets.json');
    console.log(tweets);
})();

Promise.coroutine2(function*() {
    var tweets = yield $.get('tweets.json');
    var profile = yield $.get('profile.json');
    var friends = yield $.get('friends.json');
    console.log(tweets, profile, friends);
})();

Promise.coroutine3(function* (){
    var data = yield {
        tweets: $.get('tweets.json'),
        profile: $.get('profile.json')
    };
    console.log(data.tweets, data.profile);
})();

Promise.coroutine4(function* (){
    var [tweets, profile] = yield [
        $.get('tweets.json'),
        $.get('profile.json')
    ];
    console.log(tweets, profile);
})();

//Destructered syntax
var [a,b] = [10,11]