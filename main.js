let API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=1302&limit=1302";
let container = document.querySelector(".AllCards");

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    let pokearray = data.results;

    pokearray.forEach((pokemon) => {
      let PokeUrl = pokemon.url;

      fetch(PokeUrl)
        .then((res) => res.json())
        .then((data) => {
          let Pokname = data.name;
          let PokId = data.id;
          let PokImg = data.sprites.front_default;
          let Poktype1 = data.types[0].type.name;
          let Poktype2 = data.types[1] ? data.types[1].type.name : null;

          let card = document.createElement("div");
          card.classList.add("card", "Pokecard");
          card.style.width = "15rem";

          let img = document.createElement("img");
          img.classList.add("card-img-top", "PokImg");
          img.src = PokImg;
          img.alt = "Pokemon Image";

          let cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          let title = document.createElement("h5");
          title.classList.add("PokeName");
          title.textContent = Pokname;

          let Pokecode = document.createElement("h6");
          Pokecode.classList.add("card-title", "PokeCode");
          Pokecode.textContent = "Code: #" + PokId;

          let typeList = document.createElement("ul");
          typeList.classList.add("PokeTypes");

          let type1 = document.createElement("li");
          type1.classList.add("type1");
          type1.textContent = Poktype1;

          let type2 = document.createElement("li");
          type2.classList.add("type2");
          type2.textContent = Poktype2 ? Poktype2 : "";

          typeList.appendChild(type1);
          if (Poktype2) typeList.appendChild(type2);
          cardBody.append(title, Pokecode, typeList);
          card.append(img, cardBody);

          container.appendChild(card);

          type1.style.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(`--type-${Poktype1}`);

          if (Poktype2) {
            type2.style.backgroundColor = getComputedStyle(
              document.documentElement
            ).getPropertyValue(`--type-${Poktype2}`);
          }
        });
    });
  });

document.querySelectorAll(".btn-header").forEach((button) => {
  button.addEventListener("click", () => {
    let type = button.id;
    let allCards = document.querySelectorAll(".Pokecard");

    allCards.forEach((card) => {
      let types = card.querySelectorAll(".PokeTypes li");
      let match = false;

      types.forEach((typeElement) => {
        if (typeElement.textContent.toLowerCase() === type.toLowerCase()) {
          match = true;
        }
      });

      if (match) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.querySelector("#ver-todos").addEventListener("click", () => {
  let allCards = document.querySelectorAll(".Pokecard");
  allCards.forEach((card) => {
    card.style.display = "block";
  });
});
