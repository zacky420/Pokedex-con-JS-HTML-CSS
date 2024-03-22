let API_URL = "https://pokeapi.co/api/v2/pokemon/";

fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data));

  