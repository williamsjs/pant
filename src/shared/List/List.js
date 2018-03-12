import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.items = this.items.bind(this);
  }

  items(item) {
    return (
      <li key={item.id}>
        <img src={item.img} />
      </li>
    );
  }

  render() {
    return (
      <div className="list">
        {this.props.list.map(this.items)}
      </div>
    );
  }
}

export default List;