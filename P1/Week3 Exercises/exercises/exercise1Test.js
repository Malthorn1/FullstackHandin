const b = require ("./exercises1")


function callModule () {
    b([8 ,16 ,24 ,32 ]).then((result) => 
    console.log(result) 
); 
}


async function callModuleAsync() {
    let randoms = await b([48, 40, 32, 24, 16]);
    console.log(randoms);
  }

callModule()
callModuleAsync()