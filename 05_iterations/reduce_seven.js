const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 //const myNewNum = myNumbers.map( (num) => num + 10)

 // chaining 

 const myNewNum = myNumbers
                  .map( (num) => num * 10)
                  .map( (num) => num + 1)
                  .filter((num) => num >= 40 )

 console.log(myNewNum)


 //+++++++++++++++++++++++++++++++++Reduce++++++++++++++++++++++++

 // parameter as (accumulator, currentValue) and condition :  accumulator + currentValue but after that use , and initialValue

 const num = [1, 2, 3]

 const reduceNum = num.reduce( function (acc, currval)  { 
     console.log(`acc: ${acc} and current Value is ${currval}`)  
    
    return acc + currval
            
            
            }, 0)

 console.log(reduceNum);

 // use arrow funtion 

 const arwNum = num.reduce( (acc, currval) => acc + currval, 0)

 console.log(reduceNum);


 // Reduce use for shopping cart to add muliple price

 const shoppingCart = [
     {
        itemName:  "js course",
        itemPrice: 2999
     },

     {
        itemName:  "js course",
        itemPrice: 2999
     },

     {
        itemName:  "java course",
        itemPrice: 3999
     },

     {
        itemName:  "Python course",
        itemPrice: 999
     }, 
     {
        itemName:  "Data science course",
        itemPrice: 5999
     }
 ]

 const priceToPay = shoppingCart.reduce( (acc, curr) =>  acc + curr.itemPrice, 0)
 console.log(priceToPay)