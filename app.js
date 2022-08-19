// const BREEDURL = "https://dog.ceo/api/breeds/list/all";
// const select = document.querySelector(".select");
// const spinner = document.querySelector(".spinner");
// const img = document.querySelector(".image");
// fetch(BREEDURL)
//   .then(response => response.json())
//   .then(function(data) {
//     let breedsObject = Object.keys(data.message);
//     for (let breed of breedsObject) {
//       const option = document.createElement("option");
//       option.value = breed;
//       option.innerHTML = breed;
//       select.appendChild(option);
//     }
//   });
// select.addEventListener("change", function(e) {
//   spinner.style.display = "block";
//   img.style.display = "none";

//   let breed = event.target.value;
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then(response => response.json())
//     .then(function(data) {
//       img.src = data.message;
//     });
// });
// img.addEventListener("load", function() {
//   img.style.display = "block";
//   spinner.style.display = "none";
// });

const fetchAllBreeds = async () => {
  const BREED_URL = 'https://dog.ceo/api/breeds/list/all';
  const response = await fetch(BREED_URL);
  const data = await response.json();
  const allBreeds = [];
  for (key of Object.keys(data.message)) {
    allBreeds.push(key);
  }
  populateDropdown(allBreeds);
};
const select = document.querySelector('.select');
const populateDropdown = (allBreeds) => {
  let dropdownText = '<option value="" ></option>';
  let item;
  for (item of allBreeds) {
    dropdownText += `<option value="" >${item}</option>`;
  }
  select.innerHTML = dropdownText;
  select.addEventListener('change', () => fetchSpecificBreed(item));
};
fetchAllBreeds();

const img = document.querySelector('.image');
const spinner = document.querySelector('.spinner');
async function fetchSpecificBreed(item) {
  const specificBreed = `https://dog.ceo/api/breed/${item}/images/random`;
  spinner.style.display = 'block';
  img.style.display = 'none';
  try {
    const response = await fetch(specificBreed);
    const src = await response.json();
    spinner.style.display = 'none';
    img.style.display = 'block';
    img.src = src.message;
  } catch (error) {
    console.log(error);
  }
}
