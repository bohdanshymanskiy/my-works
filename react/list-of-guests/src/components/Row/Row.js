import React from "react";


class Row extends React.Component {

  render() {
    const { guest: { username, age, gender, isArrive, id }, guestIsCome } = this.props
    return (
      <tr key={id}>
        <td><input type='checkbox' checked={isArrive} onChange={guestIsCome(id)} /></td>
        <td>{username}</td>
        <td>{age}</td>
        <td>{gender}</td>
      </tr>
    )
  }

}

export default Row;