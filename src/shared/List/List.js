import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.items = this.items.bind(this);
  }

  items(item) {
    return (
      <div key={item.id} className="item">
        {item.title}
        <img src={item.img} alt="" className="item-image"/>
      </div>
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