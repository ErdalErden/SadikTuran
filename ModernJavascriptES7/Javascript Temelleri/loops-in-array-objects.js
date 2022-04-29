//Loops in Array & Objects

let cars = ['Bmw','Mercedes','Toyota'];
let people = [
    {
        firstName:'Ada',
        lastName:'Bilgi'
    },
    {
        firstName:'Yiğit',
        lastName:'Bilgi'
    },
    {
        firstName:'Çınar',
        lastName:'Turan'
    },
];

//Arrays
//for

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

console.log('-----------------')

//for-in

for(let i in cars){
    console.log(`index:${i} value:${cars[i]}`);
}

console.log('-----------------')

for(let i in cars){
    console.log(`${cars[i]}`);
}

console.log('-----------------')
for(let i in cars){
    console.log(cars[i]);
}

console.log('-----------------')

//foreach
cars.forEach(function(item){
    console.log(item);
})

console.log('-----------------')

//Objects
//for
for(let i=0;i<people.length;i++){
    console.log(people[i].firstName);
}

console.log('-----------------')
//for-in
for(let i in people){
    console.log(`index:${i} value:${people[i].firstName} ${people[i].lastName}`)
}

console.log('-----------------')
//foreach
people.forEach(function(item){
    console.log(item.firstName + " " + item.lastName)
})
console.log('-----------------')
//map : return an array
let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName;
})

console.log(val);
console.log(val[0]);
console.log(val[1]);




