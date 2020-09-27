const URL = "https://swapi.dev/api/people/";
const fetch = require('node-fetch');
var now = require("performance-now")
var start = now()
var end = now()
 
function fetchPerson(url){
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}
  //Complete this function



async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+'1');
  const person2 = await fetchPerson(URL+'2');
  console.log(person1.name);
  console.log(person2.name)


  console.log("After all"); 

}


printNames(); 