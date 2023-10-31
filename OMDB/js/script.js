$ = require("jquery");

function loadMovies(query) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", `https://www.omdbapi.com/?t=${query.replace(" ", "%20")}&type=movie&apikey=522a1f3c`, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);

      $(document.querySelector("#result")).html(
        `<ul>` +
          data.Search.map(function(movie) {
            return `<li><a href="#">${movie.Title}</a></li>`;
          }) +
        "</ul>"
      );
    } else {
      console.log("Error: " + xhr.status);
    }
  };

  xhr.send();
}

$(document.querySelector("form")).on("submit", function(e) {
  e.preventDefault();

  var query = $(this).find("input[name='query']").val();

  loadMovies(query);
});
