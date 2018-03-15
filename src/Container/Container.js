import React, { Component } from 'react';
import List from '../shared/List/List';
import Loading from '../shared/Loading';
import DogCategories from '../shared/DogCategories';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [], loading: true}
  }

  componentDidMount() {
    const listItems = [];
    Promise.all(
      DogCategories.map((category, index) => {
        listItems.push({title: category, id: index + 1});
        return fetch(`https://dog.ceo/api/breed/${category}/images/random`)
      })
    ).then(requests => {
      Promise.all(requests.map(req => req.json()))
        .then(items => {
          items.forEach((item, index) => listItems[index].img = item.message);
          this.setState({list: listItems, loading: false})
        });
    });
      
  }


  render() {
    const {list, loading} = this.state;

    return (
      <div className="container">
        <List list={list}/>
        {loading && 
          <Loading />
        }
      </div>
    );
  }
}

export default Container;