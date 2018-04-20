import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import List from '../shared/List/List';
import Nav from '../Nav/Nav';
import DogModal from '../DogModal/DogModal';
import DogCategories from '../shared/DogCategories';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: DogCategories, 
      loading: true, 
      modalIsOpen: false,
      currentBreedPics: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchDogs = this.fetchDogs.bind(this);
  }

  componentDidMount() {
    this.state.list.forEach((item, index) => {
      fetch(`https://dog.ceo/api/breed/${item.name}/images/random`)
        .then(res => res.json())
        .then(response => {
          this.setState(prevState => {
            const list = prevState.list;
            const updatedItem = Object.assign({}, list.find(i => i.name === item.name), {img: response.message});
            list[index] = updatedItem;
            return {list};
          })
        })
    });
  }

  handleClick(id, e) {
    this.setState({
      modalIsOpen: true, 
      currentBreed: this.state.list.find(dog => dog.id === id).name,
      currentBreedPics: []
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  fetchDogs() {
    fetch(`https://dog.ceo/api/breed/${this.state.currentBreed}/images`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({currentBreedPics: res.message});
      });
  }

  render() {
    const {list, modalIsOpen, currentBreedPics} = this.state;

    return (
      <div className="container">
        <Nav />
        {list.length !== list.filter(item => item.img).length ? (
          <ReactLoading className="loading" type={'bars'} color={'skyblue'} />
        ) : (
          <List list={list} handleClick={this.handleClick}/>
        )
        }
        <DogModal 
          modalIsOpen={modalIsOpen} 
          fetchDogs={this.fetchDogs} 
          closeModal={this.closeModal}
          currentBreedPics={currentBreedPics}
         />
      </div>
    );
  }
}

export default Container;