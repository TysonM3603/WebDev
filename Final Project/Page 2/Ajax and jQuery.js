function openNav() {
   document.getElementById('mySideNav').style.width = "250px";
}

function closeNav() {
   document.getElementById('mySideNav').style.width = "0";
}

$(document).ready(function() {
   $('#row-form').on('click', '.add-row-btn', function(event) {
      debugger
      event.preventDefault();

      let name = $('#name').val();
      let age = $('#age').val();
      let occupation = $('#occupation').val();

      let newRow = `<tr>
                       <td>${name}</td>
                       <td>${age}</td>
                       <td>${occupation}</td>
                       <td><button class="delete-btn">Delete</button></td>
                    </tr>`;
      $('#dynamic-table tbody').append(newRow);

      $('#row-form')[0].reset();
   });

   $(document).on('click', '.delete-btn', function() {
      $(this).closest('tr').remove();
   });
});