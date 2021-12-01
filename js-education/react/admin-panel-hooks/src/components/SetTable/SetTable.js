import React, { useState } from "react";
import SetTableCSS from './SetTable.module.css';
import Row from '../Row/Row'

function SetTable({ allUsers, deleteItem, editItem }) {
  const inputSearch = 'search';
  const [searchName, setSearchName] = useState(null)
  const filterUsers = searchName ? allUsers.filter(item => item.username.startsWith(searchName)) : allUsers

  const searchValue = (e) => {
    setSearchName(e.target.value)
  }

  return (
    <div>
      <div className={SetTableCSS.search}>
        <label >
          <input type='text'
            className={SetTableCSS.label}
            name={inputSearch}
            placeholder='Search'
            onChange={searchValue}
            value={searchName || ''} />
        </label>
      </div>
      <div className={(filterUsers.length > 0) ? null : SetTableCSS.display}>
        <table className={SetTableCSS.table}>
          <tr>
            <th>Username</th>
            <th>Department</th>
            <th>Date of Create</th>
            <th>Date of Edit</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {filterUsers.map((user) =>
            <Row user={user} key={user.id} deleteItem={deleteItem} editItem={editItem} searchName={searchName} />
          )}
        </table>
      </div >
      <div>
        {allUsers.length < 1 ?
          <p className={SetTableCSS.text}>Please, enter data of Users</p>
          : filterUsers.length === 0 ?
            <p className={SetTableCSS.text}>There are no matches by name '{searchName}'</p> : null
        }
      </div>
    </div>
  )
}


export default SetTable;