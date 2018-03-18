import React from 'react';
import './ListItem.css';

const ListItem = ({id, name, img}) => {
  return (
    <div key={id} className="item">
      <img src={img} alt="" className="item-image"/>
      <span className="hover-text">{name}</span>
    </div>
  );
};

export default ListItem;