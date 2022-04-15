// Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız
var dt = new Date();

console.log(dt);
console.log(dt.getMonth());     // Ay bilgisi
console.log(dt.getDate());      // Gün bilgisi
console.log(dt.getFullYear());  // Yıl bilgisi

// Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz
var dtA = new Date('4/15/2022 11:39:10');
var dtB = new Date(2022,4,15,11,39,10);
console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz
var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);

// İki tarih arasındaki geçen zamanı bulunuz
var startDate = new Date('1/1/1990');
var endDate = new Date('1/1/1991')
var diffMs = endDate - startDate;   // iki tarih arasındaki fark milisaniye olarak
var sn = diffMs / 1000;             // milisaniye to saniye
var min = sn / 60;                  // saniye to dakika
var hr = min / 60;                  // dakika to saat
var dy = hr / 24;                   // saat to gün

console.log('milisaniye: ' + diffMs);
console.log('saniye: ' + sn);
console.log('dakika: ' +min);
console.log('saat: ' +hr);
console.log('gün: ' +dy);

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır

// Yaş hesaplama nasıl yapılır
var birthday = new Date('5/24/1974');
var currentDate = Date.now();
var ageDiffMs = currentDate - birthday.getTime();
var ageDate = new Date(ageDiffMs);
console.log(ageDate.getFullYear() - 1970);
