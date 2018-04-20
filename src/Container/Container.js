import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Modal from 'react-modal';
import Slider from 'react-slick';

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
    var settings = {
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="container">
        <Nav />
        {list.length !== list.filter(item => item.img).length ? (
          <ReactLoading className="loading" type={'bars'} color={'skyblue'} />
        ) : (
          <List list={list} handleClick={this.handleClick}/>
        )
        }
        <Modal ariaHideApp={false} isOpen={modalIsOpen} onAfterOpen={this.fetchDogs} onRequestClose={this.closeModal}>
          <Slider {...settings} >
            {currentBreedPics.map((pic, i) => <div key={i}><img style={{width: '100%'}} src={pic} /></div>)}
          </Slider>
        </Modal>
      </div>
    );
  }
}

export default Container;