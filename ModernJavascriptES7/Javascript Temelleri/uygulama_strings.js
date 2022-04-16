// Demo - Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye ü ö ç";

// Cümle kaç karakterlidir.
console.log(sentence.length);

// Kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(' ').length)

// Tüm cümleyi küçük hale çevirin
console.log(sentence.toLowerCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz
console.log(sentence.trim());

// Cümle içerisindeki '-' karakterini siliniz
console.log(sentence.replace('-',''));

// url içinden str kısmını çıkarınız
var str = 'http://';
console.log(url.substring(str.length));
console.log(url.slice(str.length));

//url hangi protokolü kullanmaktadır
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

//url 'com' ifadesini içeriyormu
console.log(url.indexOf('.com'));
console.log(url.includes('com'));

//url string ifadesini geçerli bir url olarak düzenleyiniz
console.log(url.toLowerCase()
               .replace(/ /g,'-')
               .replace(/ı/g,'i')
               .replace(/ü/g,'u')
               .replace(/ö/g,'o')
               .replace(/ç/g,'c')
);

