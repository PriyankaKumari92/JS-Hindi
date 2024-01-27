// "this"  it refers the current content 

const user = {
    username: "Priyanka",
    price : 199,
    welcomeMessage:  function(){

      console.log(`${this.username}, welcome to website`);
      console.log(this);
    }
}

// user.welcomeMessage()

// // if someone change the name of user

// user.username = "sam"

// user.welcomeMessage()

// console.log(this);

// browser ke ander jo object hai wo window object hai interview question 
// ager console.log(this); ise object ke baher ager print karte hai to empty {} as output hoga 
// user.username = "sam"
//user.welcomeMessage()
// user.welcomeMessage()

// tino ko comment karne pe {} output ye hoga  nahi karne pe pure object ka data acess kar shkta hai globaly 

//"this" only used in object and it will refered value but in function it returned globaly value but this.varible retrun undefine in  a function



// function chai(){
//      console.log(this)
// }

// chai(this) // it show all golbal data as output

function chai(){
    let username = "priyanka"
    console.log(this.username);
}

chai(this)   // output undefine

// another way to represent function both way output is same undefine

const chaiTwo = function(){
    let username = "priyanka"
    console.log(this.username);
}

chaiTwo(this)

// arrow function 

const chaiArrow = () =>{
    let username = "priyanka"
    console.log(this.username);
}

chaiArrow(this)

// in all way output always same undefine

// note: in object only use this.username method to call a value but in function this.username only return undefine but in console.log(this) returm empty {}


// add two number by arrow function by explicit method : use {} to rap the variable and return

const addTwo1 = (num1, num2) => {

    return num1+ num2
}

console.log(addTwo1(3, 7))


// add two number by arrow function by implicit method : use () rap the variable or not its up to you and remove return
// const addTwo2 = (num1, num2) => num1+ num2 

const addTwo2 = (num1, num2) => ( num1+ num2 )

console.log(addTwo2(3, 9))


// youncan also pass and object in function

const addTwo3 = (num1, num2) => ( {username: "priyanka"} )

// console.log(addTwo3(3, 9))

// make A function with falowing stident details

const student = {

    studentname: " priyanka",
    studentclass:  12,
    studentaddress:  " house no 27 lane no 6",
}
 function returnStudentValue(studentDetail) {
 
    //console.log( `Student Name : ${studentDetail.studentname}, Student Class : ${studentDetail.studentclass} and Student Address : ${studentDetail.studentaddress}`)
  console.table(student)

 }


// returnStudentValue(student)




const studentNew = () => ({
   sname : " Vijay",
   sclass :  "12 - A",
   saddress :  " varanasi"
})

// console.log(studentNew())


const studentAdd = (property) => {
     const result = `${property.studentname} and ${property.studentclass}`
     return result
}
const vijay = {
    studentname: "kivi",
    studentclass: 5
}
console.log(studentAdd(student))