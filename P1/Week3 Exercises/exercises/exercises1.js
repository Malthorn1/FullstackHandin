const crypto = require('crypto');
const { connect } = require('http2');
var testobject = {title: "6 Secure Randoms", randoms: []} 

/*
{
    "title": "6 Secure Randoms",
    "randoms": [
      {"length": 48,"random": "A string with 48 random hex-characters"},
      {"length": 40,"random": "A string with 40 random hex-characters"},
      {"length": 32,"random": "A string with 32 random hex-characters"},
      {"length": 24,"random": "A string with 24 random hex-characters"},
      {"length": 16,"random": "A string with 16 random hex-characters"},
      {"length": 8,"random":  "A string with 8 random hex-characters"}
    ]
  }
  
*/

////////////////////////Opgave 1, A 


function createResetToken(size) {
    while (size > 0) {
        let string = crypto.randomBytes(size).toString("hex")
        test = {length: `${size}`, random: string}
        testobject.randoms.push(test)
        size = size-8
    }}



function opg1a() {

    var length = 48 ; 
    crypto.randomBytes(length, function(err, buffer) {
        let string = buffer.toString("hex")
        testobject.randoms.push({length: length, random: string });
        length += -8
    crypto.randomBytes(length, function(err, buffer) {
        let string = buffer.toString("hex")
        testobject.randoms.push({ length: length, random: string });
        length += -8
    crypto.randomBytes(length, function(err, buffer) {
        let string = buffer.toString("hex")
        testobject.randoms.push({ length: length, random: string });
        length += -8
    crypto.randomBytes(length, function(err, buffer) {
        let string = buffer.toString("hex")
        testobject.randoms.push({ length: length, random: string });
        length += -8
        testobject.title = (`${testobject.randoms.length}`+ " Random objects")

        console.log(testobject)
    })})})})

}

//opg1a()

///////////////////////OPGAVE 1,B 

//let length = 48; 
//let time = 0; 


const myPromise  = (size )  => new Promise (function (resolve , reject ) {
    let string = crypto.randomBytes(size).toString("hex")
    const err = false;
    if (err) {
      return reject(new Error("UPPPPPPPPS"))
    }
    resolve(  {length: size, random: string} );
  });

async function b (lengths) {
var promises = lengths.map((length) => {
    return myPromise(length);
  });
var finalresult = await Promise.all(promises).then((results) => {
    var returnobject = {title: "6 Secure Randoms", randoms: []} 
    results.forEach((secureNumber) => {
        returnobject.randoms.push(secureNumber);
    });
    return returnobject


}); 
return finalresult

}

module.exports =  b; 
