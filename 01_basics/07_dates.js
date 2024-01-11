// Dates - temproal

 let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());

// type of date  : object

console.log(typeof myDate); 


let myCraetedDateOne = new Date(2023, 5, 28)
console.log(myCraetedDateOne.toString());

// want to print as string 
let myCraetedDateTwo = new Date("2014-02-23")
console.log(myCraetedDateTwo.toLocaleString());

//want print timwe also

let myCraetedDateThree = new Date(2023, 5, 28, 5, 30)
console.log(myCraetedDateThree.toLocaleString());

// but in our project we write date in first postion

let myCraetedDateFour = new Date("02-23-2024")
console.log(myCraetedDateFour.toLocaleString());

let myCraetedDates = new Date("02-23-2024")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCraetedDates.getDate());
console.log(myCraetedDates.getDay());
console.log(myCraetedDates.getMonth());   // month counting in java script strat from 0  thats why out put 1 for feb month


// interview question want to print sec : 1704962935.571

console.log(Date.now()/1000);

// but want to print extact value : 1704962935

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1) // if having confusion to count month the write in this formate

console.log(newDate.getDay());

// if writte in good format 

console.log(` ${newDate.getDay() } and the time is ${newDate.getTime()}`)

// as function and try to get customized time value 

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate)



