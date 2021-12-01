import React from "react";
import SetTableCSS from './SetTable.module.css';
import Row from '../Row/Row'

class SetTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchName: null };
  }

  searchValue = (e) => {
    this.setState({ searchName: e.target.value })
  }
  render() {
    const { allUsers, deleteItem, editItem } = this.props;
    const { searchName } = this.state;
    const filterUsers = searchName ? allUsers.filter(item => item.username.startsWith(searchName)) : allUsers
    return (
      <div>
        <div className={SetTableCSS.search}>
          <label >
            <input type='text'
              className={SetTableCSS.label}
              name='search'
              placeholder='Search'
              onChange={this.searchValue}
              value={searchName} />
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

}

export default SetTable;
