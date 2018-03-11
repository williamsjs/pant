import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.items = this.items.bind(this);
  }

  items(item) {
    <Item index={item.id} key={item.id}>{item.name}</Item>
  }

  render() {
    return (
      <div className="list">
        {this.props.items.map()}
      </div>
    );
  }
}