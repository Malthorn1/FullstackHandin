const fs = require('fs')
const buf = fs.readFileSync(process.argv[2])

const str = buf.toString(); 

//console.log(str)


var lines = str.split("\n");

console.log(lines.length-1);



