import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.setState({windowWidth: window.innerWidth})
  }

  calculateColumns(numOfColumns) {
    const listLength = this.props.list.length;
    return Math.ceil(listLength / numOfColumns);
  }

  getItemsPerColumn() {
    const { windowWidth } = this.state;
    if (windowWidth >= 1440) {
      return this.calculateColumns(5);
    } else if (windowWidth >= 768) {
      return this.calculateColumns(4);
    } else if (windowWidth >= 426) {
      return this.calculateColumns(3);
    } else {
      return this.calculateColumns(2);
    }
  }

  addColumnWrapper() {
    const listClone = this.props.list.slice(0);
    const columns = [];
    const itemsPerColumn = this.getItemsPerColumn();
    while (listClone.length > 0) {
      columns.push(listClone.splice(0, itemsPerColumn));
    }

    return columns.map((column, index) => <Column key={index} list={column} handleClick={this.props.handleClick}/>);
  }

  render() {
    return (
      <div className="list">
        {this.addColumnWrapper()}
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array
};

export default List;