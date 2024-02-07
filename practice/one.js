function pattern(n) 
    { 
        // for (let i = 1; i <= n; i++) {

        //     let count = i
    
        // for (let j = 1; j <= i; j++) {

        //     console.log(count + " ")
        //    count = count + n -j

          
           
        //   } 
        //    console.log("\t")
            
        //  }
        // defining an empty string
        let string = "";

        for(col =0; col<= n; col++) {

          //  console.log(col)

            for(row=0; row<=col; row++) {
                string += "*"; // string = string + "*"
            }

             // newline after each row
        string += "\n";

        }
         
         console.log(string)

        } 

          
    let n = 5
      

        pattern(n); 
          
    