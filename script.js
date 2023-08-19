let menu = document.querySelector("#IconeMenu");
let ListaVertical = document.querySelector(".ListaVertical");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  ListaVertical.classList.toggle("open");
};

// PARA DE ESPIAR NÃO FAÇO ENIGMA TO SÓ FAZENDO UM SITEZINHO 