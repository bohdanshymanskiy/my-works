import React, { useState, useCallback } from "react";
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

function App() {
  const [allUsers, setUsers] = useState(getData())
  const [editId, setEditId] = useState(null)

  const addUsers = (users) => {
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
    setUsers(editData)
    setEditId(null)
    setData(editData)
  }

  const deleteItem = useCallback((id) => {
    const areYouSure = window.confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      const updateData = allUsers.filter(user => user.id !== id)
      setUsers(updateData);
      setData(updateData)
    }
  }, [allUsers])

  const editItem = useCallback((id) => {
    setEditId(id)
  }, [editId])

  return (
    <div className={AppCSS.container}>
      <Forms allUsers={allUsers}
        addUsers={addUsers}
        editId={editId} />
      <SetTable allUsers={allUsers}
        deleteItem={deleteItem}
        editItem={editItem} />
    </div>
  );
}

export default App;