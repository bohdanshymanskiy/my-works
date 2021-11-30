import React from "react";
import Forms from "./components/Forms/Forms";
import SetTable from "./components/SetTable/SetTable";
import AppCSS from './App.module.css'

const setData = (data = []) => {
  try {
    localStorage.setItem('allUsers', JSON.stringify(data))
  } catch (e) {
    alert(e.message)
    return []
  }
}

const getData = () => {
  try {
    return JSON.parse(localStorage.getItem('allUsers')) || []
  } catch (e) {
    alert(e.message)
    return [];
  }
}

const data = getData()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allUsers: [...data], editId: null, username: '', department: 'Work Department', searchName: '' };
  }
  searchValue = (e) => {
    this.setState({ searchName: e.target.value })
  }
  addUsers = (users) => {
    this.setState({ allUsers: users, editId: null })
    setData(users)
  }

  deleteItem = (id) => () => {
    const { allUsers } = this.state;
    const areYouSure = window.confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      const updateData = allUsers.filter(user => user.id !== id)
      this.setState({ allUsers: updateData });
      setData(updateData)
    }
  }
  editItem = ({ id, username, department }) => () => {
    this.setState({ editId: id, username, department })
  }

  render() {
    const { allUsers, editId, username, department, searchName } = this.state;
    return (
      <div className={AppCSS.container}>
        <Forms allUsers={allUsers}
          searchValue={this.searchValue}
          addUsers={this.addUsers}
          editId={editId}
          editUsername={username}
          editDepartment={department} />
        <SetTable allUsers={allUsers}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          searchName={searchName} />
      </div>
    );
  }
}

export default App;