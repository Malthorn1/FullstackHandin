//Assignment 2 test file

const DosDetector = require('./dosDetector');

//Antal milisekunder der minimum skal være imellem hvert kald, for at dos detector ikke reagerer. 
let instance = new DosDetector(900);

instance.on('DosAttack',(arg) => {
    console.log('Possible DOS-Attack detected on URL:' + arg.url);
    console.log('Time between calls was: ' + arg.totalTimeBetweenCalls);
})

//First call
instance.addUrl("Hello.dk");

//Calls under the time Limit
//Disse 3 får dos detectoren til at reagerer da der er 250, 250 og 500 mili sec imellem
setTimeout((()=>instance.addUrl("Hello.dk")),250);
setTimeout((()=>instance.addUrl("Hello.dk")),500);
setTimeout((()=>instance.addUrl("Hello.dk")),1000);

//Call after time limit
//Denne er 4000 mili sec efter det forrige kald, derfor ingen respons
setTimeout((()=>instance.addUrl("Hello.dk")),5000);

//Call under time limit again
//denne er 500 mili sec efter forrige kald
setTimeout((()=>instance.addUrl("Hello.dk")),5500);
//denne er 1000 mili sec efter forrige kald og bliver derfor ikke fanget. 
setTimeout((()=>instance.addUrl("Hello.dk")),6500);




