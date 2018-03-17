import React from 'react';
import ListItem from '../ListItem/ListItem';

const Column = (props) => {
  return (
    props.list.map(item => <ListItem key={item.id} {...item} />)
  );
}

export default Column;