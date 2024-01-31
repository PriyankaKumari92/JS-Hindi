// for loop 

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    
}

// console.log(element);
// element is not defined  scope ke bahaer hai 

// let j = 0;  => insitalization
//index < array.length; => condition check 
//index++ => incerement
// if you want to change all varible name with one click then click duble on index and press ctr+d change name : duplicate 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
       //  console.log(" 5 is best number ")
    }
   //  console.log(element);
}



for (let i = 1; i <=10; i++) {
    
   // console.log(`Outer loop value : ${i}`)
    for (let j = 1; j <=10; j++) {
       
       //  console.log(`Inner loop value ${j} and outer loop value ${i}`)
       //console.log(i + '*' + j + ' = ' +  i*j);
    }
}

let myArray = ["flash", "superman", "spiderman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
 console.log(element)   
}

// keyword => break and continue 

// break : break the loop where find that condtion meets

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(" 5 is detected");
        break;
    }
   
    console.log(`value of i is ${index}`)

}

// continue for one last loop not printing then start printing again

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(" 5 is detected");
       continue;
    }
   
    console.log(`value of i is ${index}`)

}

