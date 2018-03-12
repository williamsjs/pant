import React, { Component } from 'react';
import SearchBox from '../shared/SearchBox/SearchBox';
import List from '../shared/List/List';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {list: []}

    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    fetch(`https://dog.ceo/api/breed/${text}/images`)
      .then(items => items.json())
      .then(parsedItems => {
        if (parsedItems.code === '404') return;
        const list = parsedItems.message.map((item, i) => ({id: (i + 1), img: item}));
        this.setState(() => ({list: list}));
      });
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