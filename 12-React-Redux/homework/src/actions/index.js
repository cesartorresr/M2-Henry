const apiKey = '1bc6c554';

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function removeMovieFavorite(id) {
  return {
    type:"REMOVE_MOVIE_FAVORITE",
    payload: id
  }

}

export function getMovieDetail(idMovie) {
  return function(dispatch){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}}&i=${idMovie}`)
    .then(response => response.json()) // conviertes la info de la api a javascript
    .then(data => { // con esa informacion, despacha un objeto que es una action
      dispatch({type: 'GET_MOVIE_DETAILS', payload: data})
    })
  }
}