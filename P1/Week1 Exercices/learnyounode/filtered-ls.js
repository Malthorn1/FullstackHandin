const fs = require('fs'); 
let path = process.argv[2]
 let type = "."+process.argv[3]

fs.readdir(path, (err, list ) => {
    if (err) throw err; 
    for ( i = 0;  i < list.length; i ++ ) {
        if (list[i].endsWith(type)) {
            console.log(list[i])
        }
    }
})




