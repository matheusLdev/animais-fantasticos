import numbersAnimate from "./numbers-animate.js";

export default function fetchAnimals() {
  async function fetchAnimal(url) {
    const animalsResponse = await fetch(url);
    const animalsJSON = await animalsResponse.json();
    const numberGrid = document.querySelector(".numbers-grid");
    animalsJSON.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numberGrid.appendChild(divAnimal);
    });
    numbersAnimate();
  };

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  };

  fetchAnimal("./animalsapi.json");
};