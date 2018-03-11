import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <SearchBox />
      </div>
    );
  }
}

export default Container;