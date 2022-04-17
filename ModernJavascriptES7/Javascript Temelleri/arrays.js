// Arrays - Diziler

let names = ['çınar','seda','ada','yiğit'];
let years = [2003,2017,1999,2012,2010];
let mix = ['Sadık','turan',1983,null,undefined,['sinema','kitap']];

// Get Array Item
console.log(names[0]);  //çınar
console.log(names[3]);  //yiğit

// Set Array Item
names[names.length] = 'Emel';      // Dizinin sonuna ekler
names[names.length] = 'Hasan';     // Dizinin sonuna ekler

// Add Item
years.push(1986);       // Dizinin sonuna ekler
years.unshift(2001);    // Dizinin başına ekler

// Remove Item
years.pop()     // Dizinin sonundaki elemanı siler
names.shift()   // Dizinin başındaki elemanı siler

// indexOf Metodu
console.log(names);
let index = names.indexOf('ada');
console.log('Adanın indeksi ' + index );  // Ada değerinin dizideki konumunu verir

// Reverse metodu - Ters çevirme
names.reverse();        // Diziyi ters çevirir
console.log(names); 

// Sort metodu - Sıralama
years.sort();   // Dizi elemanlarını sıralar

// Concat metodu - Dizileri birleştirme
let yeniDizi = years.concat(names);
console.log(yeniDizi);

// Splice metodu
names.splice(2,0,'burcu');  // dizinin 2 numaralı indeksine burcu itemini ekler
names.splice(0,1);          // dizinin 0 numaralı indeksinden 1 eleman siler

function over18(year){
    let age = 2022 - year;
    return age >= 18;
}

// Find metodu
let result = years.filter(over18)
console.log('Result: ' + result);

// Filter Metodu
let val = years.filter(over18)
console.log('val: ' +val);

console.log(names);
console.log(years);
console.log(mix);

