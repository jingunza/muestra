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
let symbol = ["♦", "♥", "♠", "♣"];
const randomCard = () => {
  let paloRandom = Math.floor(Math.random() * 4 + 1);
  let numeroRandom = Math.floor(Math.random() * 13);
  let paloAltoLugar = document.querySelector("#palo-alto");
  let paloBajoLugar = document.querySelector("#palo-bajo");
  let numeroLugar = document.querySelector("#numerospan");
  if (paloRandom == 1) {
    paloAltoLugar.innerHTML = symbol[0];
    paloBajoLugar.innerHTML = symbol[0];
    paloAltoLugar.classList.add("diamond");
    paloBajoLugar.classList.add("diamond");
  } else if (paloRandom == 2) {
    paloAltoLugar.innerHTML = symbol[1];
    paloBajoLugar.innerHTML = symbol[1];
    paloAltoLugar.classList.add("heart");
    paloBajoLugar.classList.add("heart");
  } else if (paloRandom == 3) {
    paloAltoLugar.innerHTML = symbol[2];
    paloBajoLugar.innerHTML = symbol[2];
    paloAltoLugar.classList.add("spade");
    paloBajoLugar.classList.add("spade");
  } else if (paloRandom == 4) {
    paloAltoLugar.innerHTML = symbol[3];
    paloBajoLugar.innerHTML = symbol[3];
    paloAltoLugar.classList.add("club");
    paloBajoLugar.classList.add("club");
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

/*
SOLUCION DE LA CLASE:

1) GENERAR UN VALOR RANDOM VALIDO PARA LA CARTA (2-10,jqka)

2) GENERAR UN SIMBOLO ALEATORIO ♦ ♥ ♠ ♣

3) EN DEPENDENCIA DEL SIMBOLO EN EL PASO 2, GENERA UNA CLASE .SPADE .HEART .CLUB .DIAMOND
  VALOR
  SIMBOLO
  CLASE

4) SOBREESCRIBIR EL HTML CON LOS VALORES QUE GENERE

5) 


*/
