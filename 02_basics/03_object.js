// Singleton
// Object.create  it is made by constructor 

// object literals - it is made by refrence 

const mySym = Symbol("mykey1")

const JsUser = {
    name: "priyanka",
    "full name": "priyanka singh ",
    age: 32,
    location: "varanasi",
    email: "priyanka@123.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday"],
    [mySym]: "mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"]);  // keys always work as string and it is good way to print with []

// for example print full nane

console.log(JsUser["full name"]);

// mySym interview question always write into [mySym] 
// mySym  always write key into [mySym]

console.log(JsUser[mySym]);

console.log(typeof JsUser[mySym])

console.log(JsUser)

// i want change email id 

JsUser.email = "pksingh@123"
console.log(JsUser)

// but if you want freeze that value then use freeze method
//Object.freeze(JsUser)
JsUser.email = "pksingh@chatgpt.com"
console.log(JsUser)


// make a function 

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingtWO = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingtWO());






