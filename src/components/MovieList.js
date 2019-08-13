import React from 'react';
import MovieDetail from './MovieDetail.js';

const MovieList = (props) => {

  return (
    <div className="comment-list">
      <h2>I am a MovieList, rendered by MovieContainer</h2>
      <MovieDetail />
    </div>
  );
}

export default MovieList;
