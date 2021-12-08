import React, { useRef } from "react";


function App() {
  const names = useRef(null)

  const lox = (e) => {
    e.preventDefault();
    e.target.reset()
  }
  return (
    <form onSubmit={lox}>
      <div>
        <select name='select' ref={names}>
          <option selected value='Your Gender'>Your gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <button type='submit' >Submit</button>
      </div >
    </form >
  )
}

export default App;
