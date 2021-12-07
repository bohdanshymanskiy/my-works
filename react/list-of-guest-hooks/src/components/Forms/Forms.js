import React, { useState } from "react";
import FormCSS from './Forms.module.css';

function Forms({ addNewGuest }) {
  const nameGuest = 'Name';
  const ageGuest = 'Age';
  const genderGuest = 'Gender';
  const [guestName, setName] = useState(null)
  const [guestAge, setAge] = useState(null)
  const [guestGender, setGender] = useState('Your Gender')

  const setValue = (e) => {
    let { name, value } = e.target;
    if (name === nameGuest) {
      setName(value)
    } else if (name === ageGuest) {
      setAge(value)
    } else if (name === genderGuest) {
      setGender(value)
    }
  }

  const updateGuests = () => {
    const guest = { guestName, guestAge, guestGender }
    for (const key in guest) {
      if (!guest[key]) {
        guest[key] = ''
      }
    }
    addNewGuest(guest)
    setName(null)
    setAge(null)
    setGender('Your Gender')
  }

  return (
    <div className={FormCSS.box}>
      <div>
        <label>
          <input type='text'
            name={nameGuest}
            value={guestName || ''}
            className={FormCSS.item}
            placeholder='First name'
            onChange={setValue} />
        </label>
      </div>
      <div>
        <label>
          <input type='number'
            name={ageGuest}
            value={guestAge || ''}
            className={FormCSS.item}
            placeholder='Age'
            onChange={setValue} />
        </label>
      </div>
      <select className={FormCSS.item} name={genderGuest} value={guestGender} onChange={setValue}>
        <option disabled value='Your Gender'>Your gender</option>
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
