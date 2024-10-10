function toggleVisibility(button) {
   $(button).click(function () {
     $('#hideContent').toggleClass("d-none");
     $('#showContent').toggleClass("d-yes");
   });
 }

 $(document).ready(function () {
   toggleVisibility("#hideContent");
 });
 $(document).ready(function () {
   toggleVisibility("#showContent");
 });