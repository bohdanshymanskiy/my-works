import React, { useEffect, useState } from "react";
import FormCSS from './Forms.module.css'

const nameUser = 'username';
const departmentUser = 'department';

function Forms({ addUsers, editName, editDepartment }) {
  const [username, setName] = useState(null)
  const [department, setDepartment] = useState(null)

  useEffect(() => {
    setName(editName)
    setDepartment(editDepartment)
  }, [editName, editDepartment])

  const setValue = (e) => {
    let { name, value } = e.target;
    if (name === nameUser) {
      setName(value)
    } else if (name === departmentUser) {
      setDepartment(value)
    }
  }

  const addOrEdit = () => {
    const user = { username, department }
    if (!username || department === 'Work Department') {
      window.alert('Please fill all forms')
    } else {
      addUsers(user)
    }
    setName(null)
    setDepartment(null)
  }

  return (
    <div className={FormCSS.box}>
      <div>
        <label>
          <input type='text' name={nameUser}
            className={FormCSS.label}
            placeholder='Username'
            onChange={setValue}
            value={username || ''} />
        </label>
      </div>
      <select name={departmentUser}
        className={FormCSS.label}
        onChange={setValue}
        value={department || 'Work Department'}>
        <option disabled value='Work Department'>Work Department</option>
        <option value='Developer'>Developer</option>
        <option value='Intern'>Intern</option>
        <option value='Student'>Student</option>
        <option value='Bachelor'>Bachelor</option>
        <option value='Driver'>Driver</option>
      </select>
      <button type='button' className={FormCSS.button} onClick={addOrEdit}>Submit</button>
    </div >
  )
}


export default Forms;