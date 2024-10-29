$("#viewCat").on("click", function () {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_K1POEp3HVWpz3x41aKPaA6TLvjk6mtDCawvz7pp1pckdPJTKgus4o2vE2XfzZBZu",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    success: function (response) {
      const randomIndex = Math.floor(Math.random() * response.length); //I did ask ChatGPT for help on this part because I wanted to ensure that the picture given from the list was random and wasn't sure how to do that.
      const catImage = response[randomIndex]?.url;
      const catData = `<h2>Here is a cute cat! Awww.</h2><img src="${catImage}" alt="Cat" />`;
      $("#catInfo").html(catData);
    },
    error: function () {
      $("#catInfo").html("Cat not found. Please try again.");
    },
  });
});