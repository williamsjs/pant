import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Modal from 'react-modal';

import List from '../shared/List/List';
import Nav from '../Nav/Nav';
import DogCategories from '../shared/DogCategories';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: DogCategories, 
      loading: true, 
      modalIsOpen: false, 
      currentDog: null
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
    this.setState({modalIsOpen: true, currentDog: this.state.list.find(dog => dog.id === id)});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  fetchDogs() {
    console.log(this.state.currentDog);
  }

  render() {
    const {list, modalIsOpen} = this.state;
    return (
      <div className="container">
        <Nav />
        {list.length !== list.filter(item => item.img).length ? (
          <ReactLoading className="loading" type={'bars'} color={'skyblue'} />
        ) : (
          <List list={list} handleClick={this.handleClick}/>
        )
        }
        <Modal isOpen={modalIsOpen} onAfterOpen={this.fetchDogs} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default Container;