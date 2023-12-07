// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
  const selectedGenre = document.querySelector('#genres').value;
  return selectedGenre;
};

// get the chosen year
const getSelectedYear = () => {
  const chosenYear = document.querySelector('input#year').value;
  return chosenYear.toString();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
  const posterImg = document.createElement('img');
  posterImg.setAttribute('class', 'poster');
  posterImg.setAttribute('src', moviePosterUrl);
  return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement('h3');
  titleHeader.setAttribute('id', 'movieTitle');
  titleHeader.innerHTML = title;
  return titleHeader;
};

// Create HTML for movie overview
const createMovieInfo = (film) => {
  // create outer article
  let outerArticle = document.createElement('article');
  let formattedTime = '';
  if (parseInt(film.runtime) > 60) {
    formattedTime = Math.floor(parseInt(film.runtime) / 60) + ' hrs and ';
    formattedTime += (parseInt(film.runtime) % 60) + ' mins';
  } else {
    formattedTime = film.runtime + ' mins';
  }
  outerArticle.setAttribute('class', 'additional-info');
  // set articles inner HTML
  outerArticle.innerHTML = `\n<p id="movieOverview">${film.overview}</p>\n
    \n<h4>Popularity</h4>\n<p id="director">${film.popularity}</p>\n
    <h4>Other</h4>\n
    <section class="cast">
      <p class="actor">Language: ${film.original_language}</p>\n
    </section>
    <p id="imdb-rating">IMDB Rating: ${film.vote_average}</p>\n
    <p id="run-time">Run time: ${formattedTime}</p>`;

  return outerArticle;
};

// Returns a random movie from the first page of movies UPDATE
const getRandomMovie = (movies) => {
  const quantityElement = document.querySelector('input#quantity');
  const quantity = quantityElement.value;
  let indexArr = [];
  let randomMovies = [];
  // for each number in number box, get a random film
  for (let i = 0; i < parseInt(quantity); i++) {
    indexArr.push(Math.floor(Math.random() * movies.length));
  }
  // get the movie object for each random film
  indexArr.map(index => randomMovies.push(movies[index]));
  return randomMovies;
};

function clearFilms() {
  try {
    const films = document.querySelector('div.film-list');
    films.innerHTML = '';
  } catch (err) {
    console.log(err);
  }
}

// Uses the DOM to create HTML to display the movie UPDATE
const displayMovie = (movieInfo) => {
  // clearFilms();
  // get outer boxes
  const outerSection = document.createElement('section');
  outerSection.setAttribute('id', 'movieInfo');
  const innerFlex = document.createElement('section');
  innerFlex.setAttribute('class', 'film-flex-wrap');
  // set the title
  const title = createMovieTitle(movieInfo.title);
  // create film poster
  const posterElement = document.createElement('div');
  posterElement.setAttribute('id', 'moviePoster');
  const filmImg = createMoviePoster(movieInfo.poster_path);
  posterElement.appendChild(filmImg);
  innerFlex.appendChild(posterElement);

  // create the additional info
  const filmInfo = createMovieInfo(movieInfo);
  // append the three bigger boxes
  outerSection.appendChild(title);
  innerFlex.appendChild(filmInfo);
  outerSection.appendChild(innerFlex);
  // add the film to the div film-list
  const filmList = document.querySelector('div.film-list');
  filmList.append(outerSection);
};

// DONE
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', findFilms);

// put the film genres in the dropdown
getGenres().then(populateGenreDropdown);

async function findFilms(e) {
  e.preventDefault();
  const movies = await getMovies();
  const randomMovies = getRandomMovie(movies);
  //console.log(randomMovies);
  let info = {};
  for (const item of randomMovies) {
    info = await getMovieInfo(item);
    console.log(info);
    displayMovie(info);   
  }
}

// If starting the app for first time, display the last found film
// const localFilm = JSON.parse(localStorage.getItem('film-finder-movie'));
// const initialFilm = getMovieInfo(localFilm);
// displayMovie(initialFilm);

