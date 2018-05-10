//Sequential Implementation
//Example 1.
let fetch = require('node-fetch');
let now = require("performance-now")
const URL = "https://swapi.co/api/people/";


function fetchPerson(url){
    try {
        const person = fetch(url).then(res => res.json());
        return person;
    }
    catch(err){
        console.log(err);
    }
}

async function printNames() {
    let start = now();
    const person1 = await fetchPerson(URL+1);
    const person2 = await fetchPerson(URL+2);
    let end = now();
    console.log(person1.name);
    console.log(person2.name)
    console.log(start.toFixed(3));
    console.log((end-start).toFixed(3));
}

printNames();


//Example 2
//Parallel Implementation
async function getNames(){
const p1 = await fetchPerson(URL+1);
const p2 = await fetchPerson(URL+2);
    
let results = [p1,p2];
Promise.all(results)
.then(data=> {
    console.log(data[0].name +" " + data[1].name);
})
.catch((err)=>console.log("Error: " + err))}
getNames();

//Example 2 
let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;  // simulates the result of the operation
        if(msg == "a") {
            ok = false;
            err= "a's not allowed"
        }
        if (ok) {
          resolve(msg.toUpperCase());
        }
        else {
          reject(err);
        }
      }, delay);
    });
  };
  
  let p1 = promiseFactory("Msg from Promise 1",1500);
  let p2 = promiseFactory("Msg from Promise 2",500);
  let p3 = promiseFactory("Msg from Promise 3",3500);
  let p4 = promiseFactory("ab",500);

  let results = [p1,p2,p3,p4];
  
Promise.all(results)
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log("Error: " + err))

//Notice that the Promise.all function returns an array with data from the promises in the correct order.


//Example 3
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    try {
      const n = await fetch(URL + id).then(res => res.json());
      const f = await fetch(n.films[0]).then(res => res.json());
      const s = await fetch(f.species[0]).then(res => res.json());
      const p = await fetch(s.homeworld).then(res => res.json());
      console.log();
      let y = "Name: " + n.name + ", Title: " + f.title + ", Specie: " + s.name + ", Planet: " + p.name;
      console.log(y);
      return y;
    }
    catch (err) {
      console.log(err);
    }
  }

const id = process.argv[2];
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id);