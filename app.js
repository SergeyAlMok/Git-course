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