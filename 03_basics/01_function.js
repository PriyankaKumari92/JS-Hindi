

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}

sayMyName()

// sayMyName - refrence , ()=> execute

// add two numbers

function addTwoNumbers(number1, number2){
  console.log(number1+number2);

}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

// paramiters => number1, number2
// function whwn it called is arguments=> 3, 4


//  how to store value in function 

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    // console.log("priyanka")    // i want print prinyanka but after return function not return any thing it is out of the scope

    return number1 + number2  // another way to write 2 line code in single line
  
  }

  const result = addTwoNumbers(3, 4)
  console.log("Result: ", result);

  function loginUserMessgae(username = "sam"){
       if(username === undefined){  // if(!username) anoter way to write that same code
            console.log("Please enter a username")
            return
       }
       return `${username} just login`
  }

  console.log(loginUserMessgae("Priyanka"))

  // Not provide user name the result will show undefine : undefined just login
  console.log(loginUserMessgae())


  // username = "sam"  then if condtion me nahi jayega sam just login ayega ager koi atribute nahi dere tab 

// console.log(loginUserMessgae("priyanka")) => overwirte kar dega sam ko ager value pass kar di jaye to 


// shopping cart : number of item and amount added process

function calculateCartPrice(val1, val2, ...num1 ){
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 600))
// showing only 1st element 200 so use ...num1 => it is called restOpreator or spread 

// after using ...num1 => you can get an array as output : [ 200, 400, 500, 600 ]

// if enter val1, val2, ...num1 => val1= 200, val2= 400  ..num1  => will shpw[500, 600]  interview question

// How to pass an object into functions


const user ={

    username: "Priyanka",
    prices: 199
}
  
 function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)
 }

 handleObject(user)


 // for typing error like price may be different at the both place the you can pass object directly 

 handleObject({
    username: "Vijay",
    price: 399
 })


 // you can also pass array as atribute 

 const myNewArray = [200, 400, 500, 2000]

 function returnSecondValue(getArray){
      return getArray[1]
 }

 console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([200, 400, 500, 2000]))