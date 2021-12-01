import React from "react";


function Row({ user, deleteItem, editItem, searchName }) {
  const { id, dateOfCreate, dateOfEdit, username, department } = user;
  return (
    <tr>
      <td>{!searchName ? username : <div><mark>{searchName}</mark><span>{username.slice(searchName.length)}</span></div>}</td>
      <td>{department}</td>
      <td>{dateOfCreate}</td>
      <td>{dateOfEdit || '-'}</td>
      <td><button type='button' onClick={() => editItem(id)}>EDIT</button></td>
      <td><button type='button' onClick={() => deleteItem(id)}>Delete</button></td>
    </tr >
  )
}


export default Row;