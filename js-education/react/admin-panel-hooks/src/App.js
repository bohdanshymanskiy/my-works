import React, { useState } from "react";
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
    return [];
  }
}
const data = getData()

function App() {

  const [allUsers, setUsers] = useState([...data])
  const [editId, setEditId] = useState(null)
  const [username, setName] = useState('')
  const [department, setDepartment] = useState('Work Department')
  const [searchName, setSearchName] = useState('')


  const addOrEdit = (user) => () => {
    const dateAtMoment = new Date().toUTCString();
    if (username === '' || department === 'Work Department') {
      window.alert('Please fill all forms')
    } else {
      if (editId) {
        const editData = allUsers.slice().map(item => {
          if (item.id === editId) {
            item.username = username;
            item.department = department;
            item.dateOfEdit = dateAtMoment;
          }
          return item;
        })
        setUsers(editData)
        setEditId(null)
        setName('')
        setDepartment('Work Department')
        setData(allUsers)
      } else {
        const newUser = { id: Date.now(), dateOfCreate: dateAtMoment, dateOfEdit: null, ...user }
        const updatingData = [...allUsers, newUser];
        setUsers(updatingData)
        setEditId(null)
        setName('')
        setDepartment('Work Department')
        setData(updatingData)
      };
    }
  }

  const deleteItem = (id) => () => {
    const areYouSure = window.confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      const updateData = allUsers.filter(user => user.id !== id)
      setUsers(updateData);
      setData(updateData)
    }
  }
  const editItem = ({ id, username, department }) => () => {
    setEditId(id)
    setName(username)
    setDepartment(department)
  }


  return (
    <div className={AppCSS.container}>
      <Forms addOrEdit={addOrEdit}
        username={username}
        searchName={searchName}
        department={department} />
      <SetTable allUsers={allUsers}
        deleteItem={deleteItem}
        editItem={editItem}
        searchName={searchName} />
    </div>
  );
}

export default App;
