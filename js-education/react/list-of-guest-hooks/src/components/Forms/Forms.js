import React, { useState } from "react";
import FormCSS from './Forms.module.css';

function Forms({ addNewGuest }) {
  const [guestName, setName] = useState('')
  const [guestAge, setAge] = useState('')
  const [guestGender, setGender] = useState('')

  const setValue = (e) => {

    let { name, value } = e.target;
    if (name === 'Name') {
      setName(value)
    } else if (name === 'Age') {
      setAge(value)
    } else if (name === 'Gender') {
      setGender(value)
    }
  }

  const updateGuests = () => {
    addNewGuest({ guestName, guestAge, guestGender })
    setName('')
    setAge('')
    setGender('')
  }

  return (
    <div className={FormCSS.box}>
      <div>
        <label>
          <input type='text'
            name='Name'
            value={guestName}
            className={FormCSS.item}
            placeholder='First name'
            onChange={setValue} />
        </label>
      </div>
      <div>
        <label>
          <input type='number'
            name='Age'
            value={guestAge}
            className={FormCSS.item}
            placeholder='Age'
            onChange={setValue} />
        </label>
      </div>
      <select className={FormCSS.item} name='Gender' value={guestGender} onChange={setValue}>
        <option selected value='Your Gender'>Your gender</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>
      <div>
        <button type='submit' className={FormCSS.buton} onClick={updateGuests}>Submit</button>
      </div>
    </div>
  );
}

export default Forms;
