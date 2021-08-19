import React from 'react';

function ListItem({ todo }) {
  let clases = {};
  if (typeof (todo[1]) === 'string') {
    clases.strong = 'string-icon';
    clases.p = 'string-text';
  }
  else if (typeof (todo[1]) === 'number') {
    clases.strong = 'number-icon';
    clases.p = 'number-text';
  }
  else if (typeof (todo[1]) === 'boolean') {
    clases.strong = 'boolean-icon';
    clases.p = 'boolean-text';
  }
  return (
    <li>
      <strong className={clases.strong} />
      <span>{todo[0]}:</span>
      <p className={clases.p}>{todo[1].toString()}</p>
    </li>
  )
}
export default ListItem;