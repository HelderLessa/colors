"use strict";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  container.style.background = randomColor();
});
