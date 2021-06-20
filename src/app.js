const { get } = require("jquery");

window.onload = function () {

  //numbers
  document.querySelector("#top-suite-number").innerHTML = generateDeckNumber();
  document.querySelector("#bottom-suite-number").innerHTML = document.querySelector("#top-suite-number").innerHTML;
  document.querySelector("#number").innerHTML = document.querySelector("#top-suite-number").innerHTML;

  //suites
  document.querySelector("#top-suite").innerHTML=(generateDeckSuite());
  document.querySelector("#bottom-suite").innerHTML = document.querySelector("#top-suite").innerHTML;

};



// function to generate random number
let getRandomNumber = (max) => Math.floor(Math.random() * max);
const deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const suite = ["♥", "♦", "♠", "♣"]


//generate Deck Number
generateDeckNumber = () =>
  `${deck[getRandomNumber(deck.length)]}`;

//Generate suite
generateDeckSuite = () => {
  let suite = ["♥", "♦", "♠", "♣"]
  return suite[getRandomNumber(suite.length)]
  
};

get color(){
  return this.suite ==="♣" || this.suite ==="♠" ? "black" : "red"
}
function getHTML(){
  
}
console.log(generateDeckNumber(), generateDeckSuite());
