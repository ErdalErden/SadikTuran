// Strings 

const firstName = 'Sadık';
const lastName = 'Turan';
const hobbies = 'Sinema,Spor,Kitap,Yazılım';
const age = 35;

let val;

// String concat işlemi

val = firstName + ' ' + lastName;
console.log(val);

val = 'Sadık';
val += ' Turan';
console.log(val);

val = 'Benim adım ' + firstName + ' ' + lastName + ' ve yaşım ' + age + " İzmit'te yaşıyorum";
console.log(val);

val = firstName.concat(' ',lastName);
console.log(val);

let chr = val.length;
console.log(chr);

// String uppercase
val = val.toUpperCase();
console.log(val);

// String lowercase
val = val.toLocaleLowerCase();
console.log(val);

// val = val[0];
// console.log(val);

// val = val.indexOf('tur');
// console.log(val);

// val = val.indexOf('x');
// console.log(val); // result -1 (olmayan karakter)

// Substring Metodu
// val = val.substring(2,5);
// console.log(val);

// val = val.slice(3,5);
// console.log(val);

// String replace metodu
val = val.replace('sadık','çınar');
console.log(val);

// Trim metodu
val = val.trim();
console.log(val);

// Split metodu
val = hobbies.split(',');
console.log(val);










