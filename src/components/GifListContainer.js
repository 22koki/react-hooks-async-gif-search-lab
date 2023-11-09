import React, { Component } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  handleSearch = (query) => {
    // Replace 'YOUR_API_KEY' with your Giphy API key
    const apiKey = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.slice(0, 3); // Store the first 3 gifs
        this.setState({ gifs });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
