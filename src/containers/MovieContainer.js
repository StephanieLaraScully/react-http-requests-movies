import React, {Component} from 'react';
import MovieList from '../components/MovieList.js';

class MovieContainer extends Component {

  render() {
    return (
      <div className="movie-container">
        <h1>I am a Movie Container, rendered by App</h1>
        <MovieList />
      </div>
    );
  }
}

export default MovieContainer;
