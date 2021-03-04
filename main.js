triple = (str) => {
  return str.repeat(3);
};

const result1 = triple("codeimmersives ");
result1;
const result2 = triple("is the best ");
result2;

// ----------------------------------------------- //
squared = (num) => {
  return Math.sqrt(num);
};

const hipToBeSquare1 = squared(16);
hipToBeSquare1;
const hipToBeSquare2 = squared(4);
hipToBeSquare2;

// ----------------------------------------------- //

getFirstCharacter = (str) => {
  return str[0];
};

const firstName = getFirstCharacter("Sonny");
firstName;

// ----------------------------------------------- //

getLastCharacter = (str) => {
  return str[str.length - 1];
};

const last = getLastCharacter("Lance Armstrong");
last;

// ----------------------------------------------- //

getOneCharacter = (str, i) => {
  return str[i];
};

const oneChar = getOneCharacter("The One", 6);
oneChar;

// ----------------------------------------------- //

getTwoCharacters = (str, index1, index2) => {
  return str[index1] + " " + str[index2];
};

const twoChars = getTwoCharacters("Hey You", 0, 4);
twoChars;

// ----------------------------------------------- //

makeCapitalized = (str) => {
  return str.toUpperCase();
};

const makeCaps = makeCapitalized("help me");
makeCaps;

// ----------------------------------------------- //

getInitials = (str) => {
  str = str[0] + "." + str[str.indexOf(" ") + 1] + ".";

  return str.toUpperCase();
};

const initials = getInitials("sonny valenzuela");
initials;

// ----------------------------------------------- //

isItMedium = (str) => {
  if (str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }
};

const medium1 = isItMedium("I'm 21 chars long!!!!");
medium1;
const medium2 = isItMedium("I'm Medium");
medium2;

// ----------------------------------------------- //

descendingOrder = (n) =>
  parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);

const result = descendingOrder(464736599);
result;

// ----------------------------------------------- //

fizzy = (num) => {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else {
    return num;
  }
};

const fizzBuzz = fizzy(15);
fizzBuzz;

// Alternative Method by Appending

fizzyAlt = (num) => {
  let result = "";
  if (num % 3 === 0) {
    result = result + "Fizz";
  }
  if (num % 5 === 0) {
    result = result + "Buzz";
  }
  if (result === "") {
    result = num;
  }
  return result;
};

const fizzBuzz1 = fizzyAlt(100);
fizzBuzz1;

// ----------------------------------------------- //

evenOrOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

const suspense = evenOrOdd(2);
suspense;

// ----------------------------------------------- //

oneThruTwenty = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
oneThruTwenty();

// ----------------------------------------------- //
let string3 = "Boy howdy am I good at this!";

sentence = (string3) => {
  for (letter of string3) {
    console.log(letter);
  }
  return;
};

// ----------------------------------------------- //
let string4 = "And getting better every day!";

printOut = (string4) => {
  for (let i = 1; i < string4.length; i = i + 3) {
    console.log(string4[i]);
  }
  return;
};
