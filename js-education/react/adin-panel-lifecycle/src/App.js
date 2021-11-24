import React from "react";
import Forms from "./components/Forms/Forms";
import SetTable from "./components/SetTable/SetTable";
import AppCSS from './App.module.css'

const setData = (data = []) => {
  try {
    localStorage.setItem('allUsers', JSON.stringify(data))
  } catch (e) {
    alert(e.message)
  }
}

const getData = () => {
  try {
    return JSON.parse(localStorage.getItem('allUsers')) || []
  } catch (e) {
    alert(e.message)
  }
}

const data = getData()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allUsers: [], editId: null, username: '', department: '', searchName: '' };
  }

  componentDidMount() {
    this.setState({ allUsers: [...data] })
  }

  setValue = (options) => (e) => this.setState({ [options]: e.target.value })

  addOrEdit = (user) => () => {
    const { allUsers, editId, username, department } = this.state;
    const dateAtMoment = new Date().toUTCString();
    if (username === '' || department === '' || department === 'Work Department') {
      window.alert('Please fill all forms')
    } else {
      if (editId) {
        allUsers.map(item => {
          if (item.id === editId) {
            item.username = username;
            item.department = department;
            item.dateOfEdit = dateAtMoment;
          }
          return item;
        })
        this.setState({ allUsers: allUsers, editId: null, username: '', department: '' });
        setData(allUsers)
      } else {
        const newUser = { id: Date.now(), dateOfCreate: dateAtMoment, dateOfEdit: null, ...user }
        const updatingData = [...allUsers, newUser];
        this.setState({ allUsers: updatingData, editId: null, username: '', department: '' });
        setData(updatingData)
      }
    }
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
    const { allUsers, username, department, searchName } = this.state;

    return (
      <div className={AppCSS.container}>
        <Forms addOrEdit={this.addOrEdit}
          setValue={this.setValue}
          username={username}
          searchName={searchName}
          department={department} />
        <SetTable allUsers={allUsers}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          searchName={searchName} />
      </div>
    );
  }
}

export default App;
