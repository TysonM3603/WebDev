$("#viewJoke").on("click", function () {
  $.ajax({
    url: "https://icanhazdadjoke.com/",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    success: function (response) {
      const jokeData = `<h2>Joke: ${response.joke}</h2>`;
      $("#jokeInfo").html(jokeData);
    },
    error: function () {
      $("#jokeInfo").html("Joke not found. Please try again.");
    },
  });
});