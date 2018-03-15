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
        {item.name}
        {item.img ? (
          <img src={item.img} alt="" className="item-image"/>
        ) : (
          <h1>Loading</h1>
        )
        }
        
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