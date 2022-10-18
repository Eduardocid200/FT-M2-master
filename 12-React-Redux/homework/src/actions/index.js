export function addMovieFavorite(payload) { // payload ---> Pelicula que quiero agregar a favoritos.
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=4be4be45&s=${titulo}`)
          .then(response => response.json())
          .then(json => {
              dispatch({
                  type: "GET_MOVIE",
                  payload: json
              });
          });
  };
}

export function removeMovieFavorite(payload) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload };
}

export function getMovieDetail(imdbID) {
  return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=4be4be45&i=${imdbID}` )
          .then(response => response.json())
          .then(json => {
              dispatch({
                  type: "GET_MOVIE_DETAIL",
                  payload: json
              });
          });
  };
}