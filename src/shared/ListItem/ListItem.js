import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({id, name, img, handleClick}) => {
  return (
    <div key={id} className="item" onClick={e => handleClick(id, e)} >
      <img src={img} alt="" className="item-image"/>
      <span className="hover-text">{name}</span>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string
}

export default ListItem;