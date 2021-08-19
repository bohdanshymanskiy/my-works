import React from 'react';
import ListItem from './/ListItem';

function List(props) {
  return (
    <ul>
      {
        Object.entries(props.location).map(todo => {
          return <ListItem todo={todo} key={todo[0]} />
        })
      }
    </ul>
  )
}


export default List;