$("#viewPerk").on("click", function () {
  const perkName = $("#perks").val().toLowerCase();

  $.ajax({
    url: `https://dbd-api.herokuapp.com/perks/${perkName}`,
    method: "GET",
    success: function (response) {
      const perkData = `
            <img src="$https://raw.githubusercontent.com/dearvoodoo/dbd/master/Perks/${response.name}.png"><img>
            <h2>Perk Name: ${response.perk_name.toUpperCase()}<h2>
            <p>Role: ${response.role}<p>
            <p>Survivor Name: ${response.name}<p>
            <p>Description: ${response.description}<p>
         `;
      $("#perkInfo").html(perkData);
    },
    error: function () {
      $("#perkInfo").html("Perk not found. Please try again.");
    },
  });
});
