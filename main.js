const id = select => document.getElementById(select);
const url = 'https://baza-filmova.herokuapp.com/filmovi/';

let searchField =id('search');
let spaceForMovies =id('filmovi');
let loader = id('loader');
let brojFilmova = id('brojfilmova');

const yearUp = id('sortYearUp');
const yearDown = id('sortYearDown');
const titleUp = id('sortTitleUp');
const titleDown = id('sortTitleDown');

let idFilma; 
let godina;
let naziv;
let slika;

let allMovies = [];

function showMovies(podatak) {
   
    let patternForMovies = ``;

    for (let i = 0; i < podatak.length; i++) {         
        
        loader.style.display = 'none';

        godina = podatak[i].godina;
        naziv = podatak[i].naziv;
        slika = podatak[i].slika;
        idFilma = podatak[i]._id;

        patternForMovies += `
            <div class="movie">
                <a href="movie.html?_id=${idFilma}">
                    <img src=${slika} alt="Movie poster" class="movie-img">
                    <h3>${naziv}</h3>
                    <p>${godina}</p>
                </a>
            </div>
        `;

        naziv = naziv.toLowerCase();
    }
    spaceForMovies.innerHTML = patternForMovies;
}
fetch(url)
    .then( response => response.json() )
    .then( response => {
        allMovies = response;
        console.log(allMovies);
        showMovies(response);
    })
    

function sortYearUp(a, b) {
    if (a.godina < b.godina)
        return -1;
    if (a.godina > b.godina)
        return 1;
    return 0;
}
function sortYearDown(b, a) {
    if (a.godina < b.godina)
        return -1;
    if (a.godina > b.godina)
        return 1;
    return 0;
}
function sortTitleUp(a, b) {
    if (a.naziv < b.naziv)
      return -1;
    if (a.naziv > b.naziv)
      return 1;
    return 0;
}
  
function sortTitleDown(b, a) {
    if (a.naziv < b.naziv)
      return -1;
    if (a.naziv > b.naziv)
      return 1;
    return 0;
}



searchField.addEventListener('input', function() {
    let searchResults = allMovies.filter( film => film.naziv.toLowerCase().includes(searchField.value.toLowerCase()) )
    showMovies(searchResults)
})

yearUp.addEventListener("click", function() {
    allMovies.sort(sortYearUp)
    showMovies(allMovies)
})
yearDown.addEventListener("click", function() {
    allMovies.sort(sortYearDown)
    showMovies(allMovies)
})
titleUp.addEventListener("click", function() {
    allMovies.sort(sortTitleUp)
    showMovies(allMovies)
})
titleDown.addEventListener("click", function() {
    allMovies.sort(sortTitleDown)
    showMovies(allMovies)
})
