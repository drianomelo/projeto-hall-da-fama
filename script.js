const btnModal = document.querySelector(".main__btn");
const btnFecharModal = document.querySelector(".modal__btn");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");

btnModal.addEventListener("click", () => {
  const styleModal = modal.style.display;
  modal.style.display = "block";
  main.style.filter = "brightness(40%) blur(5px)";
});

btnFecharModal.addEventListener("click", () => {
  modal.style.display = "none";
  main.style.filter = "";
});
