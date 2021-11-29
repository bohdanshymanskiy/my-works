import React from "react";


function Row({ guest, guestWhoArrive }) {
  const { guestName, guestAge, guestGender, isArrive, id } = guest;

  const arrivedGuest = () => {
    guestWhoArrive(id)
  }
  return (
    <tr key={id}>
      <td><input type='checkbox' checked={isArrive} onChange={arrivedGuest} /></td>
      <td>{guestName}</td>
      <td>{guestAge}</td>
      <td>{guestGender}</td>
    </tr>
  )
}

export default Row;
