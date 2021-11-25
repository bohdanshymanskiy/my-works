import React, { useRef } from "react";
import FormCSS from './Forms.module.css';

function Forms({ addNewGuest }) {
  const guestName = useRef(null)
  const guestAge = useRef(null)
  const guestGender = useRef(null)

  const updateGuests = (e) => {
    e.preventDefault()
    const name = guestName.current.value;
    const age = guestAge.current.value;
    const gender = guestGender.current.value;
    addNewGuest({ name, age, gender })
    e.target.reset()
  }

  return (
    <form onSubmit={updateGuests}>
      <div className={FormCSS.box}>
        <div>
          <label>
            <input type='text'
              className={FormCSS.item}
              ref={guestName}
              placeholder='First name' />
          </label>
        </div>
        <div>
          <label>
            <input type='number'
              className={FormCSS.item}
              ref={guestAge}
              placeholder='Age' />
          </label>
        </div>
        <select className={FormCSS.item} ref={guestGender}>
          <option selected value='Your Gender'>Your gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <div>
          <button type='submit' className={FormCSS.buton}>Submit</button>
        </div>
      </div>
    </form >
  );
}

export default Forms;
