// Demo Loops - Sayı tahmin oyunu

/* 
1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri
ile buldurmaya çalışın
** puanlama yapın
** kullanıcı kaç kerede bileceğini belirtebilsin 
*/

var hak;
var can = Number(prompt('Kaç kerede bileceksin'));
hak = can;
var tahmin;
var sayac=0;
var sayi = Math.floor((Math.random() * 10)+1) ;


while (hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('Bir sayı giriniz'));

    if(tahmin == sayi){
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        console.log(`Puan: ${100 - (100/can)*(sayac-1)}`)
        break;
    }else if(sayi>tahmin){
        console.log('Yukarı');
    }else{
        console.log('Aşağı');
    }

    if(hak == 0){
        console.log('Tahmin hakkınız bitti. Sayı: ' + sayi);
    }
}





//console.log(sayi);