//{ it is scope}  = > it is called block scope

// {} => outside of that paranthies anything whire are declaed it called gobal scope

// global scope can used in block scope but block scope nerver be used outside of that {}scope

var c = 300

let a = 300

if (true) {
    let a = 10;
const b = 20;
var c = 30;
console.log("INNER: ", a)

}

console.log(a)
// console.log(b)

// both are showing error that a and b is not defined but c can show that reult bcz its declaed by var that's why var never used in programing 

console.log(c)


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// nested scope

function one(){
     const username = "Priyanka"

    function two(){
        website = "youtube"
        console.log(username);   // exicuted and output => priyanka but if i comment this line then again it will show nothing 
    }
  // console.log(website);   //  error => website is not defined bcz it is out of the scope child can access the parent variables but parent can not use child variables
    //two()
}

//one()


// using if consition 

if (true) {
 const username = "priyanka"

   if (username === "priyanka"){
       const website = " youtube"
       console.log(username + website);
 }

  //console.log(website);  // out of the scope showing error website not define
}

//console.log(username);   // out of the scope showing error username not define


//++++++++++++++++++++++++++++++++++++  INTERESTING ++++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(num){

   return num + 1
}

 // WRITE IT ON TOP addOne(5)

 addTwo(6) 
const addTwo = function (num){
   return num + 2

}

// WRITE IT ON TOP addTwo(6)  IT  through erro => Cannot access 'addTwo' before initialization



