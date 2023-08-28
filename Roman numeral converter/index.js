function convertToRoman(num) {
    let numerals = {
       M: 1000,
       CM: 900,
       D: 500,
       CD: 400,
       C: 100,
       XC: 90,
       L: 50,
       XL: 40,
       X: 10,
       IX: 9,
       V: 5,
       IV: 4,
       I: 1,
     };
     //passing the new values of the new numbers to convert into numerals
     let newNumeral = "";
    let numCopy = num;   //copy the num so it doesn't mutate and can used inside the for loop
    
     //checking the values of numerals objects
     for (let i in numerals) {
     //using the j variable of num, if the num is still greater than the numerals index 
    //it will increment the key to the variable newNumerals and stop the loop,
    // it will subtract the num to the values of numerals .
       for (let j= 0; j <= num; j++ ){
         if(numCopy >= numerals[i]) {
           newNumeral += i;
           numCopy -= numerals[i];
         }  
       }
     }
     //return to newNumerals to see the new value.
    return newNumeral;}
    
    convertToRoman(36);