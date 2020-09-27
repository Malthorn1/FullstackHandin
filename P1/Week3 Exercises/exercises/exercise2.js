const fetch = require('node-fetch');


const myPromise = (url) =>   new Promise(async function (resolve, reject) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err)); 
  });



function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  let result = {}; 
  let url = "https://swapi.dev/api/people/" + id;
  myPromise(url)
  .then((data) => {
      result.name = data.name;
      return myPromise(data.films[0]);
  })
  .then((data) => {
      result.movieTitle = data.title; 
      return myPromise(data.species[0]);
  })
  .then((data) => {
    result.firstSpecies = data.name; 
    return myPromise(data.homeworld);
})
.then((data) => {
    result.homeWorld = data.name;  
    console.log(result )   
})

}

async function  getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    let url = "https://swapi.dev/api/people/" + id;
    let name  = await myPromise(url) 
    let movieTitle = await myPromise(name.films[0]);
    let firstSpecies =await  myPromise(movieTitle.species[0]);
    let homeworld =await  myPromise(firstSpecies.homeworld);

    let result = await {
        name: name.name,
        film: movieTitle.title,
        firstSpecies: firstSpecies.name,
        homeworld: homeworld.name

    }
    console.log(result )
}


getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1)
  //getPlanetforFirstSpeciesInFirstMovieForPerson(1) 



