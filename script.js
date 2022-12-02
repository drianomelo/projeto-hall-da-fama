//VARIÁVEIS GERAIS
const main = document.querySelector(".main");
const player = document.querySelector(".main__player");
const fumaca = document.querySelector(".main__gif");
const header = document.querySelector(".header");

//MODAL
const btnModal = document.querySelector(".header__btn-info");
const btnFecharModal = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
btnModal.addEventListener("click", () => {
  const styleModal = modal.style.display;
  modal.style.display = "block";
  main.style.filter = "brightness(40%) blur(5px)";
  header.style.filter = "brightness(40%) blur(5px)";
  player.style.animation = "0";
  fumaca.setAttribute("src", "img/fumaca-img.png");
});

btnFecharModal.addEventListener("click", () => {
  modal.style.display = "none";
  main.style.filter = "";
  header.style.filter = "";
  btnModal.style.filter = "";
  player.style.animation = "";
  fumaca.setAttribute("src", "img/fumaca.gif");
});

//CARD
const card = document.querySelector(".card");
const btnCard = document.querySelector(".header__btn-card");
btnCard.addEventListener("click", () => {
  const styleCard = card.style.display;
  card.style.display = "block";
  main.style.filter = "brightness(40%) blur(5px)";
  header.style.filter = "brightness(40%) blur(5px)";
  player.style.animation = "0";
  fumaca.setAttribute("src", "img/fumaca-img.png");
});
