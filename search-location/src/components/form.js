import React from 'react';

function Form({ onCreate }) {
  let name = React.createRef();
  function handleSubmitClick(event) {
    name = name.current.value;
    event.preventDefault();
    onCreate(name);
  }
  return (
    <form onSubmit={handleSubmitClick}>
      <input type='text' placeholder='8.8.8.8' ref={name} />
      <button type='submit'>Search</button>
    </form>
  )
}
export default Form;