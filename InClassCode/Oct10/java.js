// document.getElementById('btn').addEventListener('click', function () {
//    this.innerText = 'You clicked me';
// });

const button = $('#btn') //Not necessary, but can be good organization

$(document).ready(function () {
   //getting their data
   //double checking their credentials
});

$(button).on('click', function () {
   modifyButtonText(this.id);
});

//This changes the text in the div to "Goodbye" when the button is clicked
// $(button).on('click', function () {
//    $('#container').text('Goodbye');
// });

function modifyButtonText(buttonId) {
   $('#' + buttonId).text('button loaded');
}