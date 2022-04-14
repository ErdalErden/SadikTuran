// Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz

// Müşteri adı
// Müşteri soyadı
// Müşteri tc kimlik no
// Müşteri sipariş toplamı
// Müşteri cinsiyet
// Müşteri adres bilgisi
// Müşteri hobiler

var customerName = 'Çınar';
var customerLastName = 'Turan';
var fullName = 'Çınar Turan';
var customerId = '1321254687';
var totalOrder = 205.6; 
var gender = 'erkek';
var address = 'Kocaeli İzmit';

// object türü
var address = {
    city : 'Kocaeli',
    district : 'İzmit',
    street : 'Ömerağa'
}

// array türü
var hobbies = ['Sinema','Kitap','Spor']

// Aşağıdaki siparişlerin toplamını hesaplayınız
var order1 = '100';
var order2 = '150';
var total = Number(order1)+Number(order2);
console.log(`total: ${total}`); //result 250

var order3 = Number('100.2');
var order4 = Number('150.5');
var total2 = order3 + order4;
console.log(`total2: ${total2}`); //result 250.7

// Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız
var order4 = parseInt('130.2');
var order5 = parseInt('150.5');
var total3 = order4 + order5;
console.log(`total3: ${total3}`); // result 280

// Aşağıda verilen doğum yılına göre yaş hesaplayınız
var yearOfBirth = 1974;
console.log(new Date().getFullYear() - yearOfBirth);

// Aşağıdaki strin ifadenin karakter sayısını bulunuz
var course = 'Modern Javascript Kursu';
console.log(course.length); // result 23

