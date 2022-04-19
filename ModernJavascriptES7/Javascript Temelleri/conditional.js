// If - Else Conditional statements

const firstName = 'Sena';
const age = 19;
const isStudent = false;
const school = 'high school';

if(firstName === 'Sena'){
    console.log('Merhaba Sena')
}

if(age === 19){
    console.log('Yaşınız 19');
}

if(isStudent){
    console.log('Merhaba öğrenci')
}
else
{
    console.log('Merhaba işler nasıl')
}

if(age>=18){

    if(school === 'university' || school==='high school'){
        console.log('ehliyet alabilirsiniz')
    }else{
        console.log('eğitim durumunuz yetersiz')
    }
}else{    
    console.log('ehliyet için yaşınız uygun değil')
}

if(age > 0 && age < 12){
    console.log(`${firstName} is a child`)
}else if(age >= 13 && age <= 19){
    console.log(`${firstName} is a teenager`)
}else{
    console.log(`${firstName} is an adult`)
}

if(typeof id !== 'undefined'){
    console.log(`id: ${id}`)
}else{
    console.log('no id')
}

