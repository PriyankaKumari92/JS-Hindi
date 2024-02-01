// for of

// [" ", " ", " "]
// [{}, {}, {}]


// for of loop for array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const val of arr) {
    console.log(val)
}

// for of loop for string

const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`each char of ${greet}`)
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('FR', "France")
map.set('US', "United State Of Amreica")

map.set('IN', "India")
//console.log(map)

// india showing two but Map return only unique value repeation ingonered by map

// now use for of loop on map return value as key and value as using disctructured method

for (const [key, value] of map) {
    console.log(key, ":-", value)
}


// check same method work on object or not : SHOWING ERRO  myObj is not iterable

// const myObj = {
//     'game1': "NFS",
//     'game2': "SPIDERMAN"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value)
// }


