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

// console.log(myNewNum)

// you can also use foreach loop but use if case then 

const newNums = []

myNum.forEach( (num) => {
if (num > 4) {
  newNums.push(num)
}

} )
console.log(newNums)


const books = [ 
  { Title: "Book One", genre: "Fiction", Publish: 1981, Edition: 2004 },
  { Title: "Book tWO", genre: "Non-Fiction", Publish: 1992, Edition: 2006 },
  { Title: "Book Three", genre: "History", Publish: 1999, Edition: 2000 },
  { Title: "Book Four", genre: "Non-Fiction", Publish: 1989, Edition: 2009 },
  { Title: "Book Five", genre: "Science", Publish: 2009, Edition: 2001 },
  { Title: "Book Six", genre: "Fiction", Publish: 1987, Edition: 2005 },
  { Title: "Book Seven", genre: "History", Publish: 1986, Edition: 2004 },
  { Title: "Book Eight", genre: "Science", Publish: 2011, Edition: 2003 },
  { Title: "Book Nine", genre: "Non-Fiction", Publish: 1981, Edition: 2009 }
]

let userBooks = books.filter( (bk) => bk.genre === "History" )

//userBooks = books.filter( (bk)=> bk.Publish >= 2000 )

userBooks = books.filter( (bk) => {
    return bk.Publish >= 1995 && bk.genre === "History"

})
console.log(userBooks)
