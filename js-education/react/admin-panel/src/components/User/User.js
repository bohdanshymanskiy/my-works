import React from "react";
import UserCSS from "./User.module.css"

function User({ user }) {
  const {
    id,
    userName,
    department,
    dateOfCreate,
    editDate
  } = user
  return (
    <tr key={id}>
      <td className={UserCSS.td}>{userName}</td>
      <td className={UserCSS.td}>{department}</td>
      <td className={UserCSS.td}>{dateOfCreate}</td>
      <td className={UserCSS.td}>{editDate}</td>
      <td className={UserCSS.td}><button type='button'>EDIT</button></td>
      <td className={UserCSS.td}><button type='button'>Delete</button></td>
    </tr>
  )
}

export default User;