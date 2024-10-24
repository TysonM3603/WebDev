$('#viewMtg').on('click', function () {
   const cardName = $('#mtg').val().toLowerCase();

   $.ajax({
      url: `https://api.magicthegathering.io/v1/cards?name=${cardName}`,
      method: 'GET',
      success: function(response) {
         if (response.cards && response.cards.length > 0) {
            const card = response.cards[0];
            const mtgData = `
               <h2>Name: ${card.name.toUpperCase()}</h2>
               <img src=${card.imageUrl}
               <p></p>
               <p>Mana Cost: ${card.manaCost}</p>
               <p>Converted Mana Cost: ${card.cmc}</p>
               <p>Colors: ${card.colors.join(', ')}</p>
               <p>Color Identity: ${card.colorIdentity.join(', ')}</p>
               <p>Type: ${card.type}</p>
               <p>Subtypes: ${card.subtypes.join(', ')}</p>
               <p>Rarity: ${card.rarity}</p>
               <p>Set Name: ${card.setName}</p>
               <p>Text: ${card.text}</p>
               <p>Flavor: ${card.flavor}</p>
               <p>Power: ${card.power}</p>
               <p>Toughness: ${card.toughness}</p>
               <p>Number: ${card.number}</p>
               <p>Loyalty: ${card.loyalty}</p>
            `;
            $('#mtgInfo').html(mtgData);
         } else {
            $('#mtgInfo').html('Card not found. Please try again.');
         }
      },
      error: function() {
         $('#mtgInfo').html('Card not found. Please try again.');
      }
   });
});
