function telephoneCheck(str) {

    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
 
 
   // regex that matches parentheses
   // with no spaces, with spaces, with dashes,
   // and with or without country code
   let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
 
   if (!regex.test(str)) {
     return regexParentheses.test(str);
   } else {
     return true;
 
   }
 }
 
 telephoneCheck("555-555-5555");