// Dates - Times

let myDate = new Date();
let birthDay = new Date(1972,11,7);


// Get Methods

console.log(myDate.getDate());          // geçerli ay gününü sayı olarak verir
console.log(myDate.getDay());           // geçerli hafta gününü verir
console.log(myDate.getFullYear());      // geçerli yıl bilgisini verir
console.log(myDate.getMonth());         // geçerli ay bilgisini verir
console.log(myDate.getHours());         // geçerli saat bilgisini verir
console.log(myDate.getSeconds());       // geçerli saniye bilgisini verir
console.log(myDate);

console.log('Yaş : ' + (myDate.getFullYear() - birthDay.getFullYear()));

// Set Methods

myDate.setFullYear(2023);       // geçerli yılı 2023 olarak değiştir
myDate.setMonth(7);             // geçerli ayı 7. ay olarak değiştir
myDate.setDate(24);             // geçerli günü 24 olarak değiştir
myDate.setHours(11);            // geçerli saati 11 olarak değiştir
myDate.setMinutes(45);          // geçerli dakikayı 45 olarak değiştir

console.log(myDate);
console.log(birthDay);

