console.log("Priyanka")
console.log("Welcome to Programiz!");
const numbers = [8, 10, 12, 56, 18, 15, 20, 45]
function printValuePush(){
    Number.push(7, 9, 13)
    Number.shift()
   // console.log(numbers)
}
//printValuePush(7)
function printValuePop(){
    Number.pop()
    console.log(numbers)
}
//printValuePop()

function PrintValueNew(){
   let result = numbers.slice(1,6)
   // console.log(result)
 //console.log(numbers)
}
PrintValueNew()
