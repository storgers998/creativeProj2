console.log("Yay it's working");
document.getElementById("random_button").addEventListener("click", function(event) {
  //alert("Yay it's working");

  fetch("https://joke3.p.rapidapi.com/v1/joke", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "joke3.p.rapidapi.com",
  		"x-rapidapi-key": "da69e2cc9amshdbe87c4a27c6bc9p1d17edjsn72d63f98d0d3"
  	}
  })
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    var result = "";
    result += data.content;
    document.getElementById("random_joke_wrapper").innerHTML = result;
  });
});
