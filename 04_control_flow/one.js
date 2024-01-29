// if 

// const userLoggedIn = true

// if (true) {
//    console.log("Executed")

// }

if (2 == "2") {
    console.log("Executed")
 
 }

 // Some condition which are mention here

 // <, >, <=, >=, ==, ===, !=, 

 if (2 != 3) {
    console.log("Executed")
 
 }


 // if else condtion 

 const temprature = 41

 if (temprature === 50) {
     console.log(" temprature is less than 50")

 } else {
   console.log("temprature is greater than 50")
 }

  console.log("Executed")

 // check scope in if else condition

 const score = 200

 if(score > 100){
   const power = "fly"
   console.log(`User power : ${power}`)
 }
    // console.log(`User power : ${power}`)

    // error : power is not defined


    // another way to write if condtion in single line

    const balance = 1000

    if(balance > 500) console.log("test 1"), console.log("test 2")
        
    if(balance < 500){
      console.log("Balance less than 500")
   
    } else if(balance < 750){
      console.log("Blance is less than 750")

    } else {
      console.log("Blance is less than 1200")
    }

    console.log("Executed")


    // && and || condition 

    const userLoggedIn = true
    const debitCard = true
    const userLoggedInGoogle = false
    const userLoggedInMail = true

    if(userLoggedIn && debitCard && 2===3){
       console.log("Allow to buy course")
    } 
    
    if( userLoggedInGoogle || userLoggedInMail ){
      console.log("User Logged in")
    }

    //

    