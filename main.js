

let API_URL = "https://pokeapi.co/api/v2/pokemon/";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    let pokearray = data.results;

    pokearray.forEach((pokemon) => {
      PokeUrl = pokemon.url;

      fetch(PokeUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let Pokname = data.name;
          let PokId = data.id;
          let PokImg = data.sprites.front_default;
          let Poktype1 = data.types[0].type.name;
          let Poktype2 = data.types[1] ? data.types[1].type.name : null
          
          let card = document.createElement('div');
          card.classList.add("card","Pokecard");
          card.style.width= "20rem";
          
          let img = document.createElement("img")
          card.classList.add("card-img-top","PokImg");
          img.src = PokImg;
          img.alt = "Pokemon Image";

          let cardBody = document.createElement("div");
          card.classList.add("card-body");

          let title = document.createElement("h5");
          title.classList.add("PokeName");
          title.textContent = Pokname;

          let Pokecode = document.createElement("h6");
          Pokecode.classList.add("card-title","PokeCode");
          Pokecode.textContent = "Code: #" + PokId;
          
          let typeList = document.createElement(ul);
          typeList.classList.add("PokeTypes");
          
          let type1= document.createElement("li");
          type1 .classList.add("type1")
          
          




console.log(Poktype1)



        });
    });
  });
