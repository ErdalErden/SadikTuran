// Demo : Functions

var hesapA = {
    ad : 'Sena Turan',
    hesapNo : '12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Emel Turan',
    hesapNo : '65487954',
    bakiye : 3000,
    ekHesap : 2000
}

function paraCek(hesap,miktar){
    
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log("Paranızı alabilirsiniz")
    }else{
        var toplam = hesap.bakiye + hesap.ekHesap;
        if(toplam>=miktar){
            if(confirm("Ek hesabınızı kullanmak istermisiniz ?")){
                console.log("Paranızı alabilirsiniz");
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log("Üzgünüz bakiyeniz yetersiz")
        }
    }
    console.log(`Bakiyeniz : ${hesap.bakiye}`);
}

console.log(paraCek(hesapA,3000));
//console.log(paraCek(hesapB,2000));