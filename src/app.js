windowonload = function () {
  document.querySelectorAll(".suite").innerHTML = generateSuite();
  document.querySelectorAll(".value, middle").innerHTML = generateDeck();
};

//generate Deck values
function generateDeck() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number
  let value = values[getRandomNumber(values.length)];
  return value
};


// // Generate deck suites
// function generateSuite() {
//   const suite = ["♥", "♦", "♠", "♣"];
//   let getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number
//   let suit = suite[getRandomNumber(suite.length)];
//   return suit

//   function suiteColor(suit) {
//     let color = red;
//     if (suit ==="♥" || suit === "♦") {
//       document.querySelectorAll(".suite").style.color = "red";
//     }
//   }

//   let suiteValue = 
//   suiteColor(suiteValue)
//   document.querySelectorAll('').innerHTML=suiteColor;
// };





console.log(generateDeck(), generateSuite());

 