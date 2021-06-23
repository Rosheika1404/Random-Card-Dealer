//generate Deck values
let generateDeck = () => {
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

  return values[getRandomNumber(values.length)];
};
generateDeck();

// Generate deck suites
let generateSuite = () => {
  const suite = ["♥", "♦", "♠", "♣"];
  let getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number

  return suite[getRandomNumber(suite.length)];
};
generateSuite();

//   const suite = ["♥", "♦", "♠", "♣"]
