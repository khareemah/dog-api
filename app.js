const BREEDURL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".select");
const spinner = document.querySelector(".spinner");
const img = document.querySelector(".image");
fetch(BREEDURL)
  .then(response => response.json())
  .then(function(data) {
    let breedsObject = Object.keys(data.message);
    for (let breed of breedsObject) {
      const option = document.createElement("option");
      option.value = breed;
      option.innerHTML = breed;
      select.appendChild(option);
    }
  });
select.addEventListener("change", function(e) {
  spinner.style.display = "block";
  img.style.display = "none";

  let breed = event.target.value;
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(function(data) {
      img.src = data.message;
    });
});
img.addEventListener("load", function() {
  img.style.display = "block";
  spinner.style.display = "none";
});
