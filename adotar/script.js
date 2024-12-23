const petListEl = document.getElementById("pet-list-wrp");

const catSwitch = document.getElementById("switch-cats");
const dogSwitch = document.getElementById("switch-dogs");

// if true, allows respective cat/dog list to be shown. index 0 is for dogs, index 1 is for cats
let filter = [true, true];

populatePage(filter);

function populatePage([showDogs, showCats]) {
  petListEl.innerHTML = "";

  if (showDogs) {
    pets.dogs.forEach((dog) => {
      const gender = dog.isMale ? "male" : "female";
      const pronoum = dog.isMale ? "o" : "a";
      const call = dog.isMale ? "e" : "a";

      petListEl.innerHTML += `<div class="pet-card" style="background-image: url('../data/images/${dog.image}-d.jpg')"><div class="pet-card-description-wrp"><p>${dog.description}</p><p class="bold dim">Abrigad${pronoum} desde ${dog.withUsSince}.</p></div><div class="pet-card-info"><img class="pet-card-gender ${gender}" src="../assets/icons/${gender}.svg" alt="icone de sexo do animal" /><p class="pet-card-name">${dog.name}</p></div><a class="pet-card-adopt-btn ${gender}" href="https://wa.me/5527981667886?text=Ol%C3%A1%2C%20me%20interessei%20n${pronoum}%20${dog.name}%2C%20e%20gostaria%20de%20saber%20se%20el${call}%20ainda%20est%C3%A1%20dispon%C3%ADvel%20para%20ado%C3%A7%C3%A3o." target="_blank"><img src="../assets/icons/heart.svg" alt="icone de coração" /></a><button class="pet-card-show-desc-btn" type="button" onclick="toggleDescription(this)">Ler mais &darr;</button></div>`;
    });
  }

  if (showCats) {
    pets.cats.forEach((cat) => {
      const gender = cat.isMale ? "male" : "female";
      const pronoum = cat.isMale ? "o" : "a";
      const call = cat.isMale ? "e" : "a";

      petListEl.innerHTML += `<div class="pet-card" style="background-image: url('../data/images/${cat.image}-c.jpg')"><div class="pet-card-description-wrp"><p>${cat.description}</p></div><div class="pet-card-info"><img class="pet-card-gender ${gender}" src="../assets/icons/${gender}.svg" alt="icone de sexo do animal" /><p class="pet-card-name">${cat.name}</p></div><a class="pet-card-adopt-btn ${gender}" href="https://wa.me/5527981667886?text=Ol%C3%A1%2C%20me%20interessei%20n${pronoum}%20${cat.name}%2C%20e%20gostaria%20de%20saber%20se%20el${call}%20ainda%20est%C3%A1%20dispon%C3%ADvel%20para%20ado%C3%A7%C3%A3o." target="_blank"><img src="../assets/icons/heart.svg" alt="icone de coração" /></a><button class="pet-card-show-desc-btn" type="button" onclick="toggleDescription(this)">Ler mais &darr;</button></div>`;
    });
  }

  if (!showDogs && !showCats) {
    petListEl.innerHTML = `<p class="dim center-txt">Os filtros estão escondendo a lista de pets. <br />Por favor, use os botôes acima para ativar/desativar os filtros.</p>`;
  }
}

// toggle filters, restyles buttons
// reruns function to populate page
dogSwitch.addEventListener("click", () => {
  if (filter[0]) {
    filter[0] = false;

    dogSwitch.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.15)";
    dogSwitch.style.fill = "var(--brown)";
    populatePage(filter);
  } else {
    filter[0] = true;

    dogSwitch.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.15)";
    dogSwitch.style.fill = "var(--blue)";
    populatePage(filter);
  }
});

catSwitch.addEventListener("click", () => {
  if (filter[1]) {
    filter[1] = false;

    catSwitch.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.15)";
    catSwitch.style.fill = "var(--brown)";
    populatePage(filter);
  } else {
    filter[1] = true;

    catSwitch.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.15)";
    catSwitch.style.fill = "var(--blue)";
    populatePage(filter);
  }
});

// get this element's description wrapper and pulls it up
// or down
function toggleDescription(el) {
  const cardDescWrp = el.parentNode.childNodes[0];

  if (cardDescWrp.style.top == "0%") {
    cardDescWrp.style.top = "100%";

    el.innerHTML = `Ler mais &darr;`;
  } else {
    cardDescWrp.style.top = "0%";

    el.innerHTML = "Esconder descrição";
  }
}
