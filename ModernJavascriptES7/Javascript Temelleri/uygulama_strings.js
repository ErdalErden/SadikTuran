// Demo - Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye";

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