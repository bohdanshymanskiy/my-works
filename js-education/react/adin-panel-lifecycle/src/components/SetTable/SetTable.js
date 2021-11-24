import React from "react";
import SetTableCSS from './SetTable.module.css';
import Row from '../Row/Row'

class SetTable extends React.Component {
  render() {
    const { allUsers, deleteItem, editItem, searchName } = this.props;
    const filterUsers = allUsers.filter(item => item.username.startsWith(searchName))
    return (
      <div>
        <div className={(allUsers.length > 0 && filterUsers.length > 0) ? null : SetTableCSS.display}>
          <table className={SetTableCSS.table}>
            <tr>
              <th>Username</th>
              <th>Department</th>
              <th>Date of Create</th>
              <th>Date of Edit</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {searchName.length > 0 ?
              filterUsers.map((user) =>
                <Row user={user} key={user.id} deleteItem={deleteItem} editItem={editItem} />
              )
              : allUsers.map((user) =>
                <Row user={user} key={user.id} deleteItem={deleteItem} editItem={editItem} />
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

}

export default SetTable;