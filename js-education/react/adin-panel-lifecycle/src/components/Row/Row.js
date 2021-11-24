import React from "react";


class Row extends React.Component {

  render() {
    const { user, deleteItem, editItem } = this.props
    const { id, dateOfCreate, dateOfEdit, username, department } = user;
    return (
      <tr key={id}>
        <td>{username}</td>
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