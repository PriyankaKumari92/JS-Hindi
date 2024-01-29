// swich control flow work key as work for different kind value like tala : mtlb us diye hute chabhi se koi ek tala khul jaye 

// jaha tala khulta hai waha se pura code execute hota hai bus default ko chhod ke 

// switch(key){
//   case value:
//     break;

//     default:
//         break;
// }

const month = 3

switch(month){
    case 1 :
    console.log(" Month is january")
     break;

    case 2:
    console.log(" Month is Feb")
     break;

    case 3:
        
    console.log(" Month is March")
      break;

    default: 
    console.log(" default case matched")
     break;
}


// youcan also pass string value 

const monthString = "March"

switch(monthString){
    case "january" :
    console.log(" Month is january")
     break;

    case "Feb":
    console.log(" Month is Feb")
     break;

    case "March":
        
    console.log(" Month is March")
      break;

    default: 
    console.log(" default case matched")
     break;
}