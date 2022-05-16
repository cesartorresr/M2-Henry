const initialState = {
  moviesFavourites: [], // estado inicial de todo
  moviesLoaded: [], // aca se va a llenar cuando alguien busque una pelicula
  movieDetail: {} // cuando alguien quiera ver el detalle de una peli va a parar en este objeto
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      }
      // moviesFav: [..state.movesFav, action.payload]
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }

  if(action.type === 'REMOVE_MOVIE_FAVORITE'){
    return {
      ...state,
      moviesFavourites:state.moviesFavourites.filter(m => m.id !== action.payload)
    }
  }

  if(action.type === 'GET_MOVIE_DETAILS') {
    return {
      ...state,
      movieDetail: action.payload
    }
  }
  return state;
}

export default rootReducer;