import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.items = this.items.bind(this);
  }

  items(item) {
    return <img key={item.id} alt="" src={item.img} />;
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