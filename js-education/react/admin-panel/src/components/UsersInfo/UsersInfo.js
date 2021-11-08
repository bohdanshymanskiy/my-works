import React from "react";
import UsersInfoCSS from "./UsersInfo.module.css";
import User from "../User/User";


function UserInfo(props) {
  return (
    <table className={UsersInfoCSS.table}>
      <tr>
        <th className={UsersInfoCSS.th}>Username</th>
        <th className={UsersInfoCSS.th}>Department</th>
        <th className={UsersInfoCSS.th}>Date of Create</th>
        <th className={UsersInfoCSS.th}>Date of Edit</th>
        <th className={UsersInfoCSS.th}>Edit</th>
        <th className={UsersInfoCSS.th}>Delete</th>
      </tr>
      {props.users.map(user => {
        return <User user={user} key={user.id} />
      })}
    </table>
  )
}

export default UserInfo;