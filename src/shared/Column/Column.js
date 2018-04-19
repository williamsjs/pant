import React from 'react';
import ListItem from '../ListItem/ListItem';
import './Column.css';

const Column = (props) => {
  return (
    <div className="column">
      {props.list.map(item => <ListItem key={item.id} {...item} handleClick={props.handleClick} />)}
    </div>
  );
}

export default Column;