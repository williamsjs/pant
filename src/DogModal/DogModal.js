import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import './DogModal.css';

Modal.setAppElement('#root')

const DogModal = ({modalIsOpen, closeModal, fetchDogs, currentBreed}) => {
  var settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Modal ariaHideApp={false} className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onAfterOpen={fetchDogs} onRequestClose={closeModal}>
      <h1 className="modal-title">{currentBreed.name}</h1>
      <Slider {...settings} >
        {currentBreed.pics.map((pic, i) => <div key={i}><img style={{width: '100%', height: '400px'}} src={pic} alt={pic}/></div>)}
      </Slider>
    </Modal>
  );
};

export default DogModal;