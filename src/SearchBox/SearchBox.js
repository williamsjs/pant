import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="search-box-container">
        <input type="search" ref={input => this._searchText = input} />
      </div>
    );
  }
}

export default SearchBox;