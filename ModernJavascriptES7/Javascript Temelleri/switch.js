// Switch Statements

let category = 'bilgisayar';

switch (category) {
    case 'telefon':
        console.log('telefon kategorisi');
        break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
        break;

    default:
        console.log('yanlış kategori');
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Pazar'
        break;
    case 1:
        day = 'Pazartesi'
        break;
    case 2:
        day = 'Salı'
        break;
    case 3:
        day = 'Çarşamba'
        break;
    case 4:
        day = 'Perşembe'
        break;
    case 5:
        day = 'Cuma'
        break;
    default:
        day = 'Cumartesi'
        break;

}

console.log(`Bugün günlerden ${day}`);

const age = 25;
const firstName = 'Sena';

switch (true) {
    case (age >= 0 && age <= 12):
        console.log(`${firstName} is a child`);
        break;

    case (age >= 13 && age <= 19):
        console.log(`${firstName} is a teenager`);
        break;

    default:
        console.log(`${firstName} is an adult`);
        break;

}