const url = 'https://baza-filmova.herokuapp.com/filmovi/';

let godina;
let naziv;
let slika;
let id;

fetch(url)
    .then( response => response.json() )
    .then( function(response) {
        console.log(response);

        let spaceForMovies = document.getElementById('filmovi');
        let patternForMovies = ``;

        for (let i = 0; i < response.length; i++) {         

            godina = response[i].godina;
            naziv = response[i].naziv;
            slika = response[i].slika;
            id = response[i].id;

            patternForMovies += `
                <div class="movie">
                    <img src=${slika} alt="Movie poster" class="movie-img">
                    <div class="movie-body">
                        <h3>${naziv}</h3>
                        <p>${godina}</p>
                        <p>${id}</p>
                    </div>
                </div>
            `;

            console.log(patternForMovies);
        }
        spaceForMovies.innerHTML = patternForMovies;
    } )