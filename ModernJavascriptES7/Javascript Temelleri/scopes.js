//Scopes

//Global Scopes
var isim='Çınar';
console.log(isim);

function logName(){
    var isim = 'Ali';
    console.log('function scope ' + isim);
}

logName();

//Local Scopes

console.log('*************************')

if(true){
    var model = 'Opel';
    let year = '2016';
    const color = 'White';
    console.log("block scope ",model,year,color);
}
console.log(model);

var i = 1;

for(var i=0;i<10;i++){
    console.log('i:',i)
}

console.log(i);




//Fonksiyonlar kendi scoplarını oluşturur
//Bloklar yeni scope oluşturmaz
//ES6 ile gelen let ve const block scope oluşturur
//var ile tanımlanan değişkene blok dışından ulaşılır
