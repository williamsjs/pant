import React, { Component } from 'react';
import './List.css';
import Column from '../Column/Column';

class List extends Component {
  constructor(props) {
    super(props);
    this.addColumnWrapper = this.addColumnWrapper.bind(this);
  }

  addColumnWrapper() {
    const listClone = this.props.list.slice(0);
    const columns = [];
    while (listClone.length > 0) {
      columns.push(listClone.splice(0, 16));
    }

    return columns.map((column, index) => <Column key={index} list={column} />);
  }

  render() {
    return (
      <div className="list">
        {this.addColumnWrapper()}
      </div>
    );
  }
}

export default List;