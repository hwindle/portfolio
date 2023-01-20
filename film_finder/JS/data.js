const tmdbKey = '80836905ac94fca8d5055c0ecf1ab442';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';

/***
 * get Genres - for the dropdown select box
 * @returns - an object of genres
 */
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

/**
 * Get a bunch of movies from one year 
 * (10 pages as it is paginated in this API).
 * and from 1 genre of movies.
 * 
 * @returns an array of film objects
 */
const getMovies = async () => {
  const selectedYear = getSelectedYear();
  const selectedGenre = getSelectedGenre();
  const moviesEndpoint = 'discover/movie?api_key=';
  // pages is the number of paginated pages returned
  // sort_by is to get the better movies first
  const requestParams = tmdbKey + '&with_genres=' + selectedGenre + '&primary_release_year=' + selectedYear + '&page=5' + '';
  const urlToFetch = tmdbBaseUrl + moviesEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const movies = jsonResponse.results;
      return movies;
    }
  } catch(error) {
    console.log(error);
  }
};

/***
 * gets the details for 1 movie
 * 
 * @param a movie object from the API
 * @returns movieInfo details object
 */
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  console.log('movie id: ', movie.id);
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
