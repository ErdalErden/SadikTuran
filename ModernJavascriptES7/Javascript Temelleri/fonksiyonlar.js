//Fonksiyonlar



function yasHesapla(dogumYili){
    return 2022 - dogumYili; 
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(1983);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function emeklilik(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilikYasi = 65 - yas;

    if(emeklilikYasi > 0){
        console.log(`${isim} Ememkliliğinize ${emeklilikYasi} yıl kaldı`)
    }else{
        console.log('Zaten emeklisiniz');
    }
}

emeklilik(2012, "Ada");
emeklilik(2010, "Yiğit");
emeklilik(1983, "Çınar");