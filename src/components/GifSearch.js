import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search for GIFs"
          />
          <button type="submit">input search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
