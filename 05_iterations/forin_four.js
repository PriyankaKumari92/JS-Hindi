// For in loop is applicable for object

const myObject = {
    js: "javascript",
    rb: " ruby",
    cpp: "c++",
    py: "python"
}

for (const key in myObject) {

    console.log(`${key} shortcut is for ${myObject[key]}`)
        
    
}

// check an array working with for in loop

const programming = ["js", "java", "py", "cpp", "rb"]

for (const key in programming) {
   console.log(programming[key])
}


// Map is iterated by for in : showing nothing but not iteratable


const map = new Map()

map.set('IN', "India")
map.set('FR', "France")
map.set('US', "United State Of Amreica")

map.set('IN', "India")

for (const key in map) {
    console.log(key)
}