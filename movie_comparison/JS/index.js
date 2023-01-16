
// codecademy one
const tmdbKey = '80836905ac94fca8d5055c0ecf1ab442';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = 'genre/movie/list?api_key=';
  const requestParams = tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch, {cache: 'no-cache'});
    if (response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch(error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = 'discover/movie?api_key=';
  const requestParams = tmdbKey + '&with_genres=' + selectedGenre;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movies = jsonResponse.results;
      return movies;
    }
  } catch(error) {
    console.log(error);
  }
};

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

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;