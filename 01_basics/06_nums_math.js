const score = 400

console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNmuber = 23.8999

console.log(otherNmuber.toPrecision(3));  // 23.9

const humdered = 10000000

console.log(humdered.toLocaleString('en-IN'))   // TO APPLY COMA BETWEEN NUMBERS : 1,00,00,000



//****************************************************MATH ****************************/


console.log(Math);

console.log(Math.abs(-4))   // NEGTIVE TO POSITIVE VALUE 4
console.log(Math.round(4.6));  // 5 
console.log(Math.ceil(4.6));     //5
console.log(Math.floor(4.6));     //4
console.log(Math.min(4,7,8,2,0))   // 0
console.log(Math.max(3,8,6,5,9));    //9


console.log(Math.random());   // randam value between 0 to 1

// if we want to print value between 1 to 6

console.log((Math.random()*10) + 1)

//if we want extact same value between 1 to 6

console.log(Math.floor(Math.random()*10) + 1) 

// min max between randam number number which not come 0 

const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max - min + 1))+ min);