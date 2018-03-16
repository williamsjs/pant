import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import List from '../shared/List/List';
import Nav from '../Nav/Nav';
import DogCategories from '../shared/DogCategories';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {list: DogCategories, loading: true}
  }

  componentDidMount() {
    this.state.list.forEach((item, index) => {
      fetch(`https://dog.ceo/api/breed/${item.name}/images/random`)
        .then(res => res.json())
        .then(response => {
          this.setState(prevState => {
            const list = prevState.list;
            const updatedItem = Object.assign({}, list.filter(i => i.name === item.name)[0], {img: response.message});
            list[index] = updatedItem;
            return {list};
          })
        })
    });

  }


  render() {
    const {list} = this.state;
    return (
      <div className="container">
        <Nav />
        {list.length !== list.filter(item => item.img).length ? (
          <ReactLoading className="loading" type={'bars'} color={'skyblue'} />
        ) : (
          <List list={list}/>
        )
        }
      </div>
    );
  }
}

export default Container;