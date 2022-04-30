// Function Declarations

//function sum(a,b){
//    var c = a+b;
//    return c;
//}

//console.log(sum(10,20));


// Function Expressions
//const sum = function(a,b){

//    if(typeof a === 'undefined'){
//        a=0;//Varsayılan parametre ataması
//    }

//    if(typeof b === 'undefined'){
//        b=0;//Varsayılan parametre ataması
//    }

//    var c = a + b;
//    return c;
//}

// Parametrelere varsayılan değer atama
const sum = function(a=0,b=5){

    var c = a + b;
    return c;
}

// Fonksiyona gönderilen tüm elemanları toplama
function sumAll(){
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total+=arguments[i];        
    }
    return total;
}

console.log(sumAll(10,20,30));//60
console.log(sum(10,30));
console.log(sum(10));