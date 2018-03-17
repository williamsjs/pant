import React from 'react';

const ListItem = ({id, name, img}) => {
  return (
    <div key={id} className="item">
      {name}
      <img src={img} alt="" className="item-image"/>
    </div>
  );
};

export default ListItem;