// kya forech value return karta hai ?

 const coding = ["js", "python", "java", "cpp", "ruby"]

 const value = coding.forEach( (item) => {
     //console.log(item)
   return item
 })

// console.log(value)

// output : undefined  you can not return anything by using foreach 

// if you want return value then use filter 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNewNum = myNum.filter( (num) => {
//     return num > 4
// })

// console.log(myNewNum)

//if you dont want to use {} bcz need to write return then use ()

const myNewNum = myNum.filter( (num) => num > 4 )

console.log(myNewNum)