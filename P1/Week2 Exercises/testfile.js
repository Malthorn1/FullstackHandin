//// Exercise 1 /////////////////
var os = require('./osInfo');


console.log(os)




//// Exercise 2 /////////////////


const EventEmitter = require ('events');
const  dos  = require ('./dosDetector'); 
const DOS = new dos(2000); 

DOS.addUrl("test.dk")

let url = "test.dk"

function myfunc(url) {
    DOS.addUrl(url); 
}

setTimeout(myfunc,1000, "hej");  // dette er den første 
setTimeout(myfunc,4000, "hej");  // denne er 2.5 sek efter seneste call og derfor ikke et problem
setTimeout(myfunc,1500, "hej"); // denne trigger 0.5 sec efter første besked, og trigger derfor dos detect 





