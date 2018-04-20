import React from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';

const DogModal = ({modalIsOpen, closeModal, fetchDogs, currentBreedPics}) => {
  var settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <Modal ariaHideApp={false} isOpen={modalIsOpen} onAfterOpen={fetchDogs} onRequestClose={closeModal}>
      <Slider {...settings} >
        {currentBreedPics.map((pic, i) => <div key={i}><img style={{width: '100%', height: '400px'}} src={pic} /></div>)}
      </Slider>
    </Modal>
  );
};

export default DogModal;