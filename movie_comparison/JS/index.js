const tmdbKey = '80836905ac94fca8d5055c0ecf1ab442';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const searchBtn = document.querySelector('#search-btn');

const getGenres = async () => {
  const genreRequestEndpoint = 'genre/movie/list?api_key=';
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch(error) {
    console.log(error);
  }
};

const filterMoviesByYear = async (allFilms, year) => {
  // holds an array of objects that match the year
  const filteredFilms = [];
  allFilms.forEach(film => {
    // get just the year of each film from release-date
    // getting first 4 characters
    const filmYear = film.release_date.slice(0, 4);
    //console.log(filmYear, typeof(filmYear));
    if (filmYear === year) {
      filteredFilms.push(film);
    }
  });
  console.dir(filteredFilms);
  return filteredFilms;
};

// UPDATE
const getMovies = async () => {
  const selectedYear = getSelectedYear();
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = 'discover/movie?api_key=';
  const requestParams = tmdbKey + '&with_genres=' + selectedGenre;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const allMovies = jsonResponse.results;
      const movies = filterMoviesByYear(allMovies, selectedYear);
      return movies;
    }
  } catch(error) {
    console.log(error);
  }
};

// UPDATE
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + '?api_key=' + requestParams;
  // get one movie
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch(error) {
    console.log(error);
  }
};

// UPDATE - Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async (e) => {
  e.preventDefault();
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
searchBtn.addEventListener('mousedown', showRandomMovie);