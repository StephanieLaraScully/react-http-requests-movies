import React, {Component} from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs})) //.results?
      .catch(err => console.error);

      console.log("Content loaded!");
  }

  render() {
    return (
      <div className="song-container">
        <h1>I am a Song Container, rendered by App</h1>
        <SongList />
      </div>
    );
  }
}

export default SongContainer;
