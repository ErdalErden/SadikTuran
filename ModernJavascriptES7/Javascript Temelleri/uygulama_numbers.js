var num = 15.2637352728

//toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3)) // result 15.3

//Ondalık kısmı 3 basamakta sınırla
console.log(num.toFixed(3)) // result 15.263

//en yakın sayıya yuvarla
console.log(Math.round(num));

//aşağı yuvarla
console.log(Math.floor(num));

//yukarı yuvarla
console.log(Math.ceil(num));

//1,2,10,56,20 sayılarından en küçük olanı bulunuz
console.log(Math.min(1,2,10,56,20));

//1,2,10,56,20 sayılarından en büyük olanı bulunuz
console.log(Math.max(1,2,10,56,20));

//50 ile 100 arası rastgele sayı üretiniz
var min = 50;
var max = 100;
console.log(Math.floor(min + Math.random() * (max - min)))

// Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım

    // Brüt Maaş 3700
    // Brüt mesai 10.3

    // Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir

    // Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiSuresi * mesaiUcreti);
console.log(toplamBrutMaas.toFixed(2));

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;
console.log(toplamNetMaas.toFixed(2));




