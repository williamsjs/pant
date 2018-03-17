import React, { Component } from 'react';
import './List.css';
import Column from '../Column/Column';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {windowWidth: 0};
    this.addColumnWrapper = this.addColumnWrapper.bind(this);
    this.setWinWidth = this.setWinWidth.bind(this);
    this.getItemsPerColumn = this.getItemsPerColumn.bind(this);
  }

  componentWillMount() {
    this.setWinWidth();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWinWidth);
  }

  setWinWidth() {
    console.log(window.innerWidth);
    this.setState({windowWidth: window.innerWidth})
  }

  getItemsPerColumn() {
    console.log('in method');
    const { windowWidth } = this.state;
    if (windowWidth > 1440) {
      return 16;
    } else if (windowWidth > 768) {
      return 20;
    } else if (windowWidth > 330) {
      return 40;
    } else {
      return this.props.list.length;
    }
  }

  addColumnWrapper() {
    const listClone = this.props.list.slice(0);
    const columns = [];
    const itemsPerColumn = this.getItemsPerColumn();
    while (listClone.length > 0) {
      columns.push(listClone.splice(0, itemsPerColumn));
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