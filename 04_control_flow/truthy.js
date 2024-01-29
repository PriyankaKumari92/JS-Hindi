const userEmail = []

if(userEmail){
  console.log("Got user email");

} else {
  console.log("Don't have user email");
}

// if i pass value as [], {}, string all as truthy value

// falsy Vlaue
// 0, -0, false, BigInt 0n, "", null, undefine, NaN

// Truthy value

// "0", "-0", " ", true, [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// browser check false value output aslways : : true

// false == 0  
// false == ''  
// 0 == ''  

// Nullish Coalescing Opreator (??): null undefined
// always assign define and ist dight number

let val1;
 // val1 = 10 ?? 5
 // val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 5

 console.log(val1);

 // Terniary Opreatior
 // condition ? true : false

 const iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("price is less than 80") : console.log("price is more than 80")


