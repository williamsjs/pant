import React from 'react';
import './ListItem.css';

const ListItem = ({id, name, img}) => {
  return (
    <div key={id} className="item">
      <img src={img} alt="" className="item-image"/>
    </div>
  );
};

export default ListItem;