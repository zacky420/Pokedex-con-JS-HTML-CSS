pokenombre = document.getElementsByClassName("PokeName")

let API_URL = "https://pokeapi.co/api/v2/pokemon/";

fetch(API_URL)
  .then(res => res.json())
  .then(data => { console.log(data);
  
  let pokename = data.results[0]
  console.log(pokename)
  
})
    

