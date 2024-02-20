/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const num = numbers[Math.floor(Math.random() * numbers.length)];

  var suites = ["&spades;", "&hearts;", "&diams;", "&clubs;"];

  const suite = suites[Math.floor(Math.random() * suites.length)];

  if (suite == "&hearts;" || suite == "&diams;") {
    document.getElementsByClassName("card-number")[0].style.color = "red";
    document.getElementsByClassName("bot-right-suite")[0].style.color = "red";
    document.getElementsByClassName("top-left-suite")[0].style.color = "red";
  }
  //write your code here
  console.log("Hello from M3 in the console!");
  document.getElementsByClassName("card-number")[0].innerHTML = num;
  document.getElementsByClassName("top-left-suite")[0].innerHTML = suite;
  document.getElementsByClassName("bot-right-suite")[0].innerHTML = suite;
};

// let suite = document.getElementsByClassName("card-number")

// const (generateNumber) = () => {

// }

console.log(document.getElementsByClassName("card-number"));

console.log(document.getElementsByClassName("bot-right-suite")[0]);
