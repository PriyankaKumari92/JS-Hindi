function pattern(n) 
    { let string = "";

    for(col =1; col<= n; col++) {
               let count = col

        for(row=1; row<=col; row++) {
            
            string += count
            count = count + n - row 
            
        }

         // newline after each row
    string += "\n";

    }
     

    console.log(string)

    } 

      
let n = 5
  

    pattern(n); 
      