// primitive datatype: call by value 

// 7 Type : String, Number, null, undefined, Symbole, Boolean, BigInt


const score = 100
const scoreValue = 100.5  // Number

const isLoggedIn = false   // Boolean
const outSideTemp = null  // object

let userEmail;   // undefined

const id = Symbol('123')
const anotherId = Symbol('123') // Symbol

console.log( id === anotherId)

const bigNumber = 3445567n  // bigint




// Non primitive :  call by reference 

// Array, Objects, Functions

const heroes = ['shaktiman', 'nagraj', 'doga']   // object

let myObj = {
 name: "priyanka",
 age: 32,

}                // object

let myFunction = function(){

    console.log("Hello world");
}                                     // function

console.log(typeof myFunction)