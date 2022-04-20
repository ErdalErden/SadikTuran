
// Uygulama 1

// var trafigeCikis = new Date('04/20/2021');
// trafigeCikis.setHours(0, 0, 0, 0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24))

// if (trafiktekiGun <= 365) {
//     console.log("Birinci servis bakım süreniz geldi")
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2){
//     console.log("İkinci servis bakım süreniz geldi")
// } else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3){
//     console.log("Üçüncü servis bakım süreniz geldi")
// } else {
//     console.log("Bilinmeyen bir süre")
// }

//Uygulama 2

var result = prompt('Who is there');

if(result == 'cancel'){
    console.log('canceled');
} else if (result == 'admin'){
    console.log('welcome Admin');

    var password = prompt('Please insert your password :');

    if(password == 'cancel'){
        console.log('canceled');
    } else if (password == '1234'){
        console.log('password true welcome admin');
    } else {
        console.log('wrong password');
    }

} else {
    console.log('I dont know');
}
