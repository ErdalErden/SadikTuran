// Numbers

let val;

val = 10 ;
console.log(val);   //10

val = Number('20');
console.log(val);   //20

val = parseInt('10.5'); 
console.log(val);   //10

val = parseFloat('35.5');
console.log(val);   //35.5

val = parseInt('a102b');
console.log(val);   //Nan

val = isNaN('10');
console.log(val);   //false

val = isNaN('c899');
console.log(val);   //true

var num = 10.12345678;
val = num.toPrecision(5);
console.log(val);   //10.123

val = num.toPrecision(8);
console.log(val);   //10.123457

val = num.toFixed(2); 
console.log(val);   //10.12

val = Math.PI; 
console.log(val);   //3.141592653589793

val = Math.round(2.4); 
console.log(val);   //2

val = Math.ceil(3.7);
console.log(val);   //4

val = Math.ceil(2.6);
console.log(val);   //3

val = Math.floor(6.8);
console.log(val);   //6


console.log(val);
console.log(typeof val);