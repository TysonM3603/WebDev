function openNav() {
   document.getElementById('mySideNav').style.width = "250px";
}

function closeNav() {
   document.getElementById('mySideNav').style.width = "0";
}

$(document).ready(function() {
   // Function to populate table with card data
   function populateCardTable(cards) {
       // Clear existing rows
       $('#dynamic-table tbody').empty();

       // Loop through the cards array and create rows
       cards.forEach(card => {
           const newRow = `
               <tr>
                   <td>${card.name}</td>
                   <td>${card.manaCost}</td>
                   <td>${card.type}</td>
                   <td>${card.rarity}</td>
                   <td><button class="delete-btn">Delete</button></td>
               </tr>
           `;
           $('#dynamic-table tbody').append(newRow);
       });
   }

   // Automatically search for card 'a' when page loads
   const defaultCardSearch = 'Phage the Untouchable';
   $.ajax({
       url: `https://api.magicthegathering.io/v1/cards?name=${defaultCardSearch}`,
       method: 'GET',
       success: function(response) {
           if (response.cards && response.cards.length > 0) {
               populateCardTable(response.cards);
           } else {
               $('#mtgInfo').html('No cards found for "Phage the Untouchable".');
           }
       },
       error: function() {
           $('#mtgInfo').html('Error fetching card data.');
       }
   });

   // Event handler for search button
   $('#viewMtg').on('click', function () {
       const cardName = $('#mtg').val().toLowerCase();

       $.ajax({
           url: `https://api.magicthegathering.io/v1/cards?name=${cardName}`,
           method: 'GET',
           success: function(response) {
               if (response.cards && response.cards.length > 0) {
                   populateCardTable(response.cards);
               } else {
                   $('#mtgInfo').html('Card not found. Please try again.');
               }
           },
           error: function() {
               $('#mtgInfo').html('Error fetching card data.');
           }
       });
   });

   // Delete a row from the table when the delete button is clicked
   $(document).on('click', '.delete-btn', function() {
       $(this).closest('tr').remove();
   });
});
