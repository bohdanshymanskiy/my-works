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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allUsers: getData(), editId: null };
  }
  addUsers = (users) => {
    const { allUsers, editId } = this.state;
    const { username, department } = users;
    const dateAtMoment = new Date().toUTCString();
    let editData;
    if (editId) {
      editData = allUsers.slice().map(item => {
        if (item.id === editId) {
          item.username = username;
          item.department = department;
          item.dateOfEdit = dateAtMoment;
        }
        return item;
      })
    } else {
      const newUser = { id: Date.now(), dateOfCreate: dateAtMoment, dateOfEdit: null, ...users }
      editData = [...allUsers, newUser];
    }
    this.setState({ allUsers: editData, editId: null })
    setData(editData)
  }

  deleteItem = (id) => {
    const { allUsers } = this.state;
    const areYouSure = window.confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      const updateData = allUsers.filter(user => user.id !== id)
      this.setState({ allUsers: updateData });
      setData(updateData)
    }
  }

  editItem = ({ id }) => {
    this.setState({ editId: id })
  }

  render() {
    const { allUsers, editId } = this.state;
    return (
      <div className={AppCSS.container}>
        <Forms allUsers={allUsers}
          addUsers={this.addUsers}
          editId={editId} />
        <SetTable allUsers={allUsers}
          deleteItem={this.deleteItem}
          editItem={this.editItem} />
      </div>
    );
  }
}

export default App;

