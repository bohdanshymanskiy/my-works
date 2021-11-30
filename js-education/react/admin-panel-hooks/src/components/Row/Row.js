import React from "react";
import RowCSS from './Row.module.css'


class Row extends React.Component {

  render() {
    const { user, deleteItem, editItem, searchName } = this.props
    const { id, dateOfCreate, dateOfEdit, username, department } = user;

    return (
      <tr key={id}>
        <td>{searchName === '' ? username : <div><mark>{searchName}</mark><span>{username.slice(searchName.length)}</span></div>}</td>
        <td>{department}</td>
        <td>{dateOfCreate}</td>
        <td>{dateOfEdit || '-'}</td>
        <td><button type='button' onClick={editItem(user)}>EDIT</button></td>
        <td><button type='button' onClick={deleteItem(id)}>Delete</button></td>
      </tr >
    )
  }

}

export default Row;