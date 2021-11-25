import React from "react";


function Row({ guest, guestWhoArrive }) {
  const { name, age, gender, isArrive, id } = guest;
  return (
    <tr key={guest.id}>
      <td><input type='checkbox' checked={isArrive} onChange={guestWhoArrive(id)} /></td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
    </tr>
  )
}

export default Row;
