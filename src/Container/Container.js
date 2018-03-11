import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import List from '../List/List';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {list: []}

    this.onChange = this.onChange.bind(this);
    this.dogs = [
      {
        id: 1,
        name: "Spot"
      },
      {
        id: 2,
        name: "Puddles"
      }
    ];
  }

  componentWillMount() {
    this.setState(prevState => ({
      list: this.dogs
    }));
  }

  onChange(text) {
    this.setState(prevState => ({
      list: this.dogs.filter(listItem => listItem.name.toLowerCase() === text.toLowerCase())
    }));
  }

  render() {
    const {list} = this.state;
    return (
      <div className="container">
        <SearchBox onChange={this.onChange} />
        <List list={list}/>
      </div>
    );
  }
}

export default Container;