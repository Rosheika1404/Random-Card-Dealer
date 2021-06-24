let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number

const generateCardValues = () =>
    `${values[getRandomNumber(values.length)]}`;
// console.log(generateCardValues());

let value = generateCardValues()



const cardValue = () => {
    document.querySelector(".middle").innerHTML = value;
    document.querySelector(".value").innerHTML = document.querySelector(".middle").innerHTML
    document.querySelector(".value2").innerHTML = document.querySelector(".middle").innerHTML

    // document.querySelector(".suite").innerHTML = suit;
    // document.querySelector(".suite2").innerHTML = document.querySelector(".suite").innerHTML

};

// const suite = ["♥", "♦", "♠", "♣"];
// const getRandomNumber = max => Math.floor(Math.random() * max); // function to generate random number

// const generateCardSuites = () =>
//     `${suite[getRandomNumber(suite.length)]}`;

// let suit = generateCardSuites()


// {
//     if (suit === "♥" || suit === "♦") {
//         // console.log("color red");
//         return style.color = "red"
//     } else {
//         // console.log(suit)
//         return style.color = "black"
//     }
// }



