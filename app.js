fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(function(data) {
    document.querySelector(".image").src = data.message;
  });
