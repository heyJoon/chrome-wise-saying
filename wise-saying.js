import { data } from "./data.js";

function addSaying() {
  const jsContainer = document.querySelector(".wiseSaying__container");
  const jsTitle = document.querySelector(".wiseSaying__title");
  const jsWord = document.querySelector(".wiseSaying__word");

  const id = document.createTextNode(`${data[0].id}`);
  const name = document.createTextNode(`${data[0].name}`);
  const saying = document.createTextNode(`${data[0].saying}`);

  jsContainer.appendChild(id);
  jsTitle.appendChild(name);
  jsWord.appendChild(saying);
}

function init() {
  addSaying();
}

init();
