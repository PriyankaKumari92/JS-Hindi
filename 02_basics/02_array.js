const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// not showing exact thing need to move this marvel_heros.concat(dc_heros) in another variable
// PUSH CHANGE THAT ORIGNAL ARRAY BUT CONCAT MAKE ANEW ARRAY 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const new_all_heros = [...marvel_heros, ...dc_heros]
console.log(new_all_heros);

// that is spread method which are use to spread that all element in a n array just like glass 

const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 4, 5,]], 9]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("priyanka"))
console.log(Array.from("priyanka"))  // converting string into array

console.log(Array.from({name: "priyanka"}))  // return empty string due to object it is interesting


// how to create array from different variable 

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));