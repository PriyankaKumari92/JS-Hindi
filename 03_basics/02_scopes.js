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


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

