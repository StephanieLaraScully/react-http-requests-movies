import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {

  return (
    <div className="comment-list">
      <h2>I am a SongList, rendered by SongContainer</h2>
      <SongDetail />
    </div>
  );
}

export default SongList;
