/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = [
    { key: "♦", color: "red" },
    { key: "♥", color: "red" },
    { key: "♠", color: "black" },
    { key: "♣", color: "black" }
  ];

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // Función para generar una carta aleatoria
  function generarCarta() {
    let randomIcon = icons[Math.floor(Math.random() * icons.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector(".top-suit").innerHTML = randomIcon.key;
    document.querySelector(".top-suit").style.color = randomIcon.color;
    document.querySelector(".bottom-suit").innerHTML = randomIcon.key;
    document.querySelector(".bottom-suit").style.color = randomIcon.color;
    document.querySelector(".number").innerHTML = randomNumber;
  }

  generarCarta();

  // Asocia el evento al botón
  document
    .getElementById("generarCarta")
    .addEventListener("click", generarCarta);
};
