import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        {this.props.list.map(item => <ListItem {...item} />)}
      </div>
    );
  }
}

export default List;