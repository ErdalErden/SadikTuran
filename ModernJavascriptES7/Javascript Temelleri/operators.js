// Operatörler

let val;
const a = 10;
const b = 5;
let c = 3;

// Aritmetik Operatörler

val = a+b; // sonuç 15
val = a-b; // sonuç 5
val = a*b; // sonuç 50
val = a/b; // sonuç 2
val = a%b; // sonuç 0
val = c++; // sonuç 3
val = ++c; // sonuç 5 (Önceki satırda c 4 oldu)
val = --c; // sonuç 4
val = c--; // sonuç 4

// Atama Operatörleri

val = a;
val +=a; // val = val + a
val -=a; // val = val - a
val *=a; // val = val * a - sonuç 100
val %=a; // val = val % a

// Karşılaştırma Operatörleri

val = a==b;     // sonuç false
val = 25 > 20;  // sonuç true
val = a === b;  // sonuç false
val = 5 === 5;  // sonuç true
val = 5 === '5';// sonuç false
val = a != b;   // sonuç true
val = a !== b;  // sonuç true
val = b > a;    // sonuç false
val = 5 >= 4;   // sonuç true

// Mantıksal Operatörler

// && (And) Ve Operatörü
// || (OR) Veya Operatörü

val = (a>b) && (a>c) // sonuç true
val = (a>b) || (a<c) // sonuç true
val = !(a>b) // false

// true && true => true
// true && false => true
// false && false => false
// !true => false

console.log(val);
console.log(typeof val);