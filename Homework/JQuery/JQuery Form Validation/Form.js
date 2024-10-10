$(document).ready(function() {
   $('#registration-form').submit(function(event) {
      event.preventDefault();

      $('.error').text('');

      let username = $('#username').val();
      if(username.trim() === '') {
         $('#username-error').text('Username is required.');
      }

      let password = $('#password').val();
      if(password.length < 8) {
         $('#password-error').text('Password must be at least 8 characters long.');
      }

      let confirmPassword = $('#confirmPassword').val();
      if(confirmPassword !== password) {
         debugger
         $('#confirmPassword-error').text('Passwords do not match.');
      }

      if($('.error').text() === '') {
         alert('Form submitted successfully!');
      }
   });
});