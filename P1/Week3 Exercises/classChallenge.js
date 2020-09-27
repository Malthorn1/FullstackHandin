const fs = require("fs");
//const { resolve } = require("path");

const promisetest = (txt, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt);
    }, delay);
  });

fs.readFile("lorem.txt", "utf8", function (err, content) {
  if (err) {
    console.log(err);

    return;
  }
  promisetest(content, 5000).then(d=>console.log(d))

});


