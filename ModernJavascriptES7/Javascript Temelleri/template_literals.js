// Template Literals

const fullName = 'Sena Turan';
const city = 'Kocaeli';
const yearOfBirth = 2015;

let val;

val = 'My name is '+fullName+
    ' I am '+(2022-yearOfBirth)+ ' years old '+
    ' and I live in '+city;


// Ternary Operator

val = `My name is ${fullName} I am ${(2022-yearOfBirth >= 18) ? 'over 18':'under 18'} and I live in ${city}`

console.log(val);