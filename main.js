triple = (str) => {
    return str.repeat(3);
}

const result1 = triple('codeimmersives ');
result1;
const result2 = triple('is the best ');
result2;

squared = (num) => {
    return Math.sqrt(num);
}

const hipToBeSquare1 = squared(16);
hipToBeSquare1;
const hipToBeSquare2 = squared(4);
hipToBeSquare2;

getFirstCharacter = (str) => {
    return str[0];
}

const firstName = getFirstCharacter('Sonny');
firstName;

getLastCharacter = (str) => {
    return str[str.length - 1];
}

const last = getLastCharacter('Lance Armstrong');
last;

getOneCharacter = (str, i) => {
    return str[i];
}

const oneChar = getOneCharacter('The One', 6);
oneChar;

getTwoCharacters = (str, index1, index2) => {
    return str[index1] + ' ' + str[index2];
}

const twoChars = getTwoCharacters('Hey You', 0, 4);
twoChars;

makeCapitalized = (str) => {
    return str.toUpperCase();
}

const makeCaps = makeCapitalized('help me');
makeCaps;

getInitials = (str) => {
    str = str[0] + '.' + str[str.indexOf(' ') + 1] + '.';
    
    return str.toUpperCase();
}

const initials = getInitials('sonny valenzuela');
initials;
