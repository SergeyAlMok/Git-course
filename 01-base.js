//1 Переменные
//camelCase
//const firstName = 'Sergey'
//const lastName = 'Mok'
//const isProg = true
//const age = 43
//const _= 'private'
//const $= 'some value'

//2 Мутирование
//console.log('Имя человека: ' + lastName + ', а возраст человека ' + age)
//alert('Имя человека: ' + lastName + ', а возраст человека ' + age)
//console.log(age.toString())

//const lastname = prompt( 'Введите фамилию' )
//alert(firstName + ' ' + lastname)

//3 Операторы
//let currentYear = 2021
//const birthYear = 1977
//const age = currentYear + birthYear

//4 Типы данных
const isProg = true
const age = 43
const firstName = 'Sergey'
let x

//console.log(typeof isProg)
//console.log(typeof age)
//console.log(typeof firstName)
//console.log(typeof x)
//console.log(null)  // !!!

//5 Приоритет операторов

//6 Условные операторы

const courseStatus = 'fail'  //ready, fail, pending

if(courseStatus=== 'ready'){
    console.log('Курс уже готов и его можно проодить')
}    
else if(courseStatus=== 'pending'){
    console.log('Курс пока находится в процессе разработки')
}  else{
    console.log('Курс пока не получился')
}

const num1 = 42     //number
const num2 = '42'   //string
const isReady= true
// == or ===
console.log(num1 === num2)

if(isReady) console.log('Все готово!')

//7 Булева логика

//8 Функции

function calculateAge(year){
    return 2021 - year - 1
}

function logInfoAbout ( name, year){
    const age = calculateAge(year)

    if(age > 0){
        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    }
    else{
        console.log('Это уже будущее!')
    }
}
logInfoAbout ( 'Сергей', 1977)
logInfoAbout ( 'Елена', 1995)
logInfoAbout ( "Елена", 2022)

//9 Массивы

const cars = ["Мазда", "Мерседес", "Форд"]
//const cars = new Array("Мазда", "Мерседес", "Форд")

cars[0] = 'Порше'
//cars[3] = 'Мазда'               //расширение количества членов массива
cars[cars.length] = 'Мазда'       //добавление нового члена массива в конец(и расширение массива)
console.log(cars)

//10 Циклы

for(let i = 0; i < cars.length; i++){
   const car = cars[i]
   console.log(car) 
}   

for ( let car of cars){
    console.log(car) 
}

//11 Объекты

/**/
const person = {
    firstName: 'Sergey',
    lastName: 'Mok',
    year: 1977,
    languges: ['Ru','En','De'],
    hasWife: true,
    greet: function(){
        console.log('greet from person')        
    }
 }
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.isProgrammer = true
console.log(person) 

person.greet()