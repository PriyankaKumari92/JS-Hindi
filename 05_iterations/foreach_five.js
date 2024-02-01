// foreach loop in function name must be remove due its a call back function  : "Higher order loop "

const coding = ["js", "python", "java", "cpp", "ruby"]

coding.forEach(  function (item) {
     // console.log(item)
})

// arrow function by using foreach loop

coding.forEach( (item) => {
    //console.log(item)
})

// decalred one function then use foreach loop only call refrence not use ()

function printMe(item){
   console.log(item)
}

// coding.forEach(printMe)

// you can also check other parameters

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

// how to check acess from array which are take object as a element 

const myCoding = [{

    LnaguageName: "Java",
    Languagefilename: "java"
},
{

    LnaguageName: "c++",
    Languagefilename: "cpp"
},
{

    LnaguageName: "Ruby",
    Languagefilename: "rb"
}


]

myCoding.forEach( (item) => {
    console.log(item.LnaguageName)
})


