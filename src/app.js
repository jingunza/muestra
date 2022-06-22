/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomCard();
};
let arrayNumero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const randomCard = () => {
  let paloRandom = Math.floor(Math.random() * 4 + 1);
  let numeroRandom = Math.floor(Math.random() * 13);
  let paloAltoLugar = document.querySelector("#palo-alto");
  let paloBajoLugar = document.querySelector(".palo-bajo");
  let numeroLugar = document.querySelector(".numero-span");
  if (paloRandom == 1) {
    paloAltoLugar.innerHTML = "♦";
    paloBajoLugar.innerHTML = "♦";
    paloAltoLugar.className = "diamond";
    paloBajoLugar.className = "diamond palo-bajo";
  } else if (paloRandom == 2) {
    paloAltoLugar.innerHTML = "♥";
    paloBajoLugar.innerHTML = "♥";
    paloAltoLugar.className = "heart";
    paloBajoLugar.className = "heart palo-bajo";
  } else if (paloRandom == 3) {
    paloAltoLugar.innerHTML = "♠";
    paloBajoLugar.innerHTML = "♠";
    paloAltoLugar.className = "spade";
    paloBajoLugar.className = "spade palo-bajo";
  } else if (paloRandom == 4) {
    paloAltoLugar.innerHTML = "♣";
    paloBajoLugar.innerHTML = "♣";
    paloAltoLugar.className = "club";
    paloBajoLugar.className = "club palo-bajo";
  }
  numeroLugar.innerHTML = arrayNumero[numeroRandom];
};
let boton = document.querySelector("button");
boton.addEventListener("click", function() {
  location.reload();
});
setTimeout(function() {
  location.reload();
}, 10000);
