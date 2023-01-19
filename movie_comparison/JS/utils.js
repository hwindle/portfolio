// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
  const select = document.querySelector('#genres')
  for (const genre of genres) {
      let option = document.createElement("option");
      option.value = genre.id;
      option.text = genre.name;
      select.appendChild(option);
  }
};

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
    formattedTime += parseInt(film.runtime) % 60 + ' mins';
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
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
};

// Uses the DOM to create HTML to display the movie UPDATE
const displayMovie = (movieInfo) => {
  // get outer boxes
  const outerSection = document.querySelector('section#movieInfo');
  const innerFlex = document.querySelector('section.film-flex-wrap');
  // create film poster
  const posterElement = document.createElement('div');
  posterElement.setAttribute('id', 'moviePoster');
  const filmImg = createMoviePoster(movieInfo.poster_path);
  posterElement.appendChild(filmImg);
  // set the title
  const title = createMovieTitle(movieInfo.title);
  outerSection.appendChild(title);
  // create the additional info
  const filmInfo = createMovieInfo(movieInfo);
  innerFlex.append(filmInfo);
};