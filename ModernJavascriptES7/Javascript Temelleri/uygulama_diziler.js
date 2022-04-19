// Demo : Arrays

// BMW, Mercedes, Opel, Mazda elemanlarına sahip bir dizi oluşturun
var arr = ["BMW","Mercedes","Opel","Mazda"];
console.log(arr);

var arr2 = new Array("BMW","Mercedes","Opel","Mazda");
console.log(arr2);

// Dizi kaç elemanlıdır ?
console.log(`Dizi ${arr.length} elemanlıdır`);

// Dizinin ilk ve son elemanı nedir ?
console.log(arr[0]);//BMW
console.log(arr[arr.length-1]);//Mazda

// "Renault" değerini dizinin sonuna ekleyin.
arr[4] = "Renault"; //Yöntem 1
console.log(arr);

arr[arr.length] = "Ford" //Yöntem 2
console.log(arr);

arr.push("Volkswagen"); //Yöntem 3
console.log(arr);

// "Toyota" değerini dizinin başına ekleyin.
arr.unshift("Fiat");
console.log(arr);

// "Fiat" değerini siliniz.
arr.shift('Fiat')
console.log(arr);

// "Volkswagen" değerini siliniz.
arr.pop('Volkswagen');
console.log(arr);

// Dizi elemanlarını tersine çevirin
arr.reverse();
console.log(arr);

// Dizi elemanlarını alfabetik olarak sıralayın
arr.sort();
console.log(arr);

// [5,80,2,1,17] dizisini sayısal olarak sıralayın
var nr = [5,80,2,1,17];
function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(nr.sort(compare));

// "Opel" değeri dizinin bir elemanımıdır ?
var result = arr.includes('Opel');
console.log(result);

// var str = "Chevrolet,Dacia" ifadesini diziye çeviriniz
var str = "Chevrolet,Dacia";
var strArray = str.split(',');
console.log(strArray);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin
var arr3 = arr.concat(strArray);
console.log(arr3);

// Oluşturulan diziden son 2 elemanı siliniz.
// Yöntem 1
console.log(arr3.length);//8
console.log('Silinen elemanlar: ' + arr3.splice(arr3.length-2,2));
console.log(arr3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız

    studentA : Yiğit Bilgi 2010
    studentB : Sena Turan 1999
    studentC : Ahmet Turan 1998
*/

var studentA = ['Yiğit','Bilgi','2010']
var studentB = ['Sena','Turan','1999']
var studentC = ['Ahmet','Turan','1998']

var students = [studentA,studentB,studentC];
console.log(students);


console.log(students[0]);
console.log(students[0][0]);//Yiğit
console.log(students[0][1]);//Bilgi
console.log(students[0][2]);//2010

console.log(students[1]);
console.log(students[1][0]);//Sena
console.log(students[1][1]);//Turan
console.log(students[1][2]);//1999

console.log(students[2]);
console.log(students[2][0]);//Ahmet
console.log(students[2][1]);//Turan
console.log(students[2][2]);//1998









