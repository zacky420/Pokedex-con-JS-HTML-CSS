pokenombre = document.getElementsByClassName("PokeName");
poketype1= document.getElementsByClassName("poketype1");
poketype2= document.getElementsByClassName("poketype2");
Pokecode = document.getElementsByClassName("PokeCode")
pokeimg= document.getElementsByClassName("PokImg")




let API_URL = "https://pokeapi.co/api/v2/pokemon/";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let pokearray = data.results;
    console.log(pokearray);
    
    pokearray.forEach(pokemon => {
      PokeUrl=pokemon.url;
      PokName=pokemon.name
      
     





      fetch(PokeUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(pokemon.name)
        

        







      })
    });;

  });
