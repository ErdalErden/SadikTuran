// Object literals
let val;
let person = {
    firstName : 'Çınar',
    lastName : 'Turan',
    age : 7,
    hobbies : ['music','game','book'],
    address : {
        city : 'Kocaeli',
        country : 'Türkiye'
    },
    getBirthYear : function(){
        return 2022 - this.age;
    }
};

val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.country;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
console.log(typeof val);

let people = [
    {firstName : 'Çınar', lastName : 'Turan'},
    {firstName : 'Sena', lastName : 'Turan'},
    {firstName : 'Ahmet', lastName : 'Coşkun'},
];

console.log(people);
console.log(people[2]);
console.log(people[1].firstName + ' ' + people[1].lastName);
console.log(`${people[0].firstName} ${people[0].lastName}`)
console.log(`${people[1].firstName} ${people[1].lastName}`)
console.log('------------------------------------------')

for (let i = 0; i<people.length;i++){
    console.log(people[i].firstName + " " + people[i].lastName);
}