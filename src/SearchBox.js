import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="search" ref={input => this._searchText = input} />
    );
  }
}

export default SearchBox;