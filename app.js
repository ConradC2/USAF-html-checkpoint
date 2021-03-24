const movieSection = document.getElementById('movies-section');

const godFather = 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg';

const movieElements = movies
    .map((movie) => {
        const movieImage = document.createElement('img');

        movieImage.src = godFather;

        movieImage.width = 100;
        movieImage.height = 200;

        const movieLink = document.createElement('a');

        movieLink.href = `./movies/${movie.title.split(' ').join('-')}`;

        movieLink.appendChild(movieImage);

        return movieLink;
    });

movieSection.replaceChildren(...movieElements);