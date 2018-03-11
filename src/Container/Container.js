import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import List from '../List/List';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="container">
        <SearchBox />
        <List />
      </div>
    );
  }
}

export default Container;