//number
const num = 42      //integer
const float = 42.42 //float
const pow = 10e3

//1 Number

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)    //2^53 - 1
console.log(Math.pow(2, 53) - 1)           //2 ^ 53 - 1
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)    //2^53 - 1
console.log('0 - 1', 1 / 0)         //infinity
console.log(typeof NaN)             //not a Number
const weird = 2 / undefined
console.log( isNaN(42) )
console.log( Number.isFinite(42) )      

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2) //string -> int
console.log(Number(stringInt) + 2)
console.log( +stringInt + 2)        //String -> number

console.log( 0.2 + 0.4)             //0.600000000001 !!!
console.log( (0.4 + 0.2).toFixed(1) )   //0.6

//2 BigInt: > max_safe_int 
console.log(9994446454999999999999n)
console.log(10n - BigInt(4) )          // = 6n

//3 Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.min(5, 3, 54, 42))
console.log(Math.max(5, 3, 54, 42))
console.log(Math.floor(4.9))        //-> 4
console.log(Math.ceil(4.9))         //-> 5

//4 Example
function getRandomBetween(min , max){
    return Math.floor(Math.random() * (max - min + 1 ) + min)
 }

 console.log(getRandomBetween(10, 42))
