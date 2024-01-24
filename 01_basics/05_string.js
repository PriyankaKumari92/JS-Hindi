const name = "Priyanka"

const repoCount = 5

// console.log( name + repoCount + " Value ")  
//  its not a good way to write the code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ITS A GOOD WAY TO WIRTE a CODE

const gameName = new String("priyankasingh")

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("s"));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// // priy : count start from 0 and then last mention dight not included so please remeber this

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);


// now change put -8 on both place

const newString = gameName.substring(-10, 4)
console.log(newString);

// priy : -10 subString not clounting negative value it start from 0 only 
// y: slice count negative value also and start from reverse so rember that 

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "    priyanka   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nomousnidhi.com/about%20us"

console.log(url.replace("%20", "-"));

// use it for website url rewitting 

console.log(url.includes('nomous'));

const arrString = "priyanka-singh-roy"

console.log(arrString.split('-'));


