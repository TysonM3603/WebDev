let number = 0;
let number2 = false;

$(document).ready(function () {
   console.log("the dom is loaded");
   /*Loose Equality*/
   if (number == number2)
      {
         console.log("Something1");
      }
      
      /*strict equality*/
      if (number === number2) //best practice is using this
      {
         console.log("Something2");
      }
});