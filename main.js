const url = 'https://baza-filmova.herokuapp.com/filmovi/';

let searchField = document.getElementById('search');
let spaceForMovies = document.getElementById('filmovi');

let godina;
let naziv;
let slika;

let allMovies = [];

function showMovies(podatak) {
    
    let patternForMovies = ``;

    for (let i = 0; i < podatak.length; i++) {         

        godina = podatak[i].godina;
        naziv = podatak[i].naziv;
        slika = podatak[i].slika;

        patternForMovies += `
            <div class="movie">
                <img src=${slika} alt="Movie poster" class="movie-img">
                <div class="movie-body">
                    <h3>${naziv}</h3>
                    <p>${godina}</p>
                </div>
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
        showMovies(response)
    })
    
searchField.addEventListener('input', function() {
    let searchResults = allMovies.filter( film => film.naziv.toLowerCase().includes(searchField.value.toLowerCase() ) )
    showMovies(searchResults)
})