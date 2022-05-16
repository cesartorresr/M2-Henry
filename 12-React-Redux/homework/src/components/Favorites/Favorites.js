import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map(m => 
            <div key={m.id}>
            <link to={`/movie/${m.id}`}>
              {m.title}
            </link>
            <button onClick={() => this.props.removeMovieFavorite(m)}>X</button>
            </div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.MoviesFavourites

  }
}



export default connect(mapStateToProps,  {removeMovieFavorite}) (ConnectedList);
