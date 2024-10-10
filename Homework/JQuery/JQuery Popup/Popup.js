$(document).ready(function() {
   $('#submit-btn').click(function() {
      let input = $('#input-field').val();
      if (input.trim() !== '')
      {
         showPopup('Success: You entered a value! "Well done Richard!"', 'success');
      } 
      else
      {
         showPopup('Fail: What are you even doing? Please input something; anything.', 'fail');
      }
   });

   function showPopup(message, type) {
      // Set the message and class for success/fail
      $('#popup-text').text(message);
      $('#custom-popup').removeClass('success fail').addClass(type);

      // Show the pop-up
      $('#custom-popup').fadeIn().delay(2000).fadeOut();
   }

   function closePopup(button) {
      $(button).click(function () {
         $('#custom-popup').fadeOut();
      });
   }

   $(document).ready(function () {
         closePopup("#close-btn");
      });
   });

   $(document).ready(function () {
      $('#close-btn').click(function () {
         $('#custom-popup').fadeOut();
      });
   });