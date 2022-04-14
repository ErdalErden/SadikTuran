// Demo : Operators

// 1 - Can ve Ada'nın boy ve kilo bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
// ** Formül : Kişinin kilosu / Boy uzunluğunun karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor

// 0 - 18,4 zayıf
// 18.5 - 24.9 Normal
// 25.0 - 29.9 Fazla kilolu
// 30.0 - 34.9 Şişman (Obez)

let indexCan;
let indexAda;

const kgCan = 50;
const kgAda = 40;
const heightCan = 1.70;
const heightAda = 1.50;

indexAda = (kgAda) / (heightAda * heightAda);
indexCan = (kgCan) / (heightCan * heightCan);

console.log(indexAda, indexCan);

let adaHigherIndex = indexAda > indexCan;
console.log("Ada'nın indeksi Can'ın indeksinden daha büyük");
