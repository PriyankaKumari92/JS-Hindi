// how to declare arr

const myArr = [0, 1 ,2, 3, 4, 5]

const myHeroes = ["shaktimag", "nagraj", "doga"]

const myArr2 = new Array(1, 2, 3, 4, 5)

//console.log(myArr[0]);

// ARRAY METHODS i want to add element in last position

myArr.push(7)
myArr.push(8)

console.log(myArr)

// want to remove last element 

myArr.pop()
console.log(myArr)

// i want to add 1 element in 1st place

myArr.unshift(9)
console.log(myArr);

// i want remove elment which are place on 1st place

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
// always answer in boolean true and flase

console.log(myArr.indexOf(3));

// how to change array into string 

const newArr = myArr.join()
console.log(myArr);

console.log(typeof newArr);
console.log(newArr);

// slice, splice differance : slice make a copy of that array and then do changes but splice do change on orignnal array

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr)
const myn2 = myArr.splice(1, 3)
console.log(myn2);

console.log("C ", myArr);









