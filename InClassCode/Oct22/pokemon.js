$('#catchPokemon').on('click', function () {
   const pokemonName = $('#pokemon').val().toLowerCase();

   $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      method: 'GET',
      success: function(response) {
         let abilitiesList = '';
         
         response.abilities.forEach(function(ability) {
            abilitiesList += ability.ability.name + ', ';
         });

         abilitiesList = abilitiesList.slice(0, -2);

         const pokemonData = `
            <img src="${response.sprites.front_default}"><img>
            <h2>Name: ${response.name.toUpperCase()}<h2>
            <p>ID: ${response.id}<p>
            <p>Weight: ${response.weight}<p>
            <p>Height: ${response.height}<p>
            <p>Abilities: ${abilitiesList}<p>
         `;
         $('#pokemonInfo').html(pokemonData);
      },
      error: function() {
         $('#pokemonInfo').html('Pokemon not found. Please try again.');
      }
   });
});