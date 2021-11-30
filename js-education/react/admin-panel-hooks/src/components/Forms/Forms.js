import React, { useState } from "react";
import FormCSS from './Forms.module.css'


function Forms(props) {
  const [name, setName] = useState('')
  const [de, setDepartment] = useState('')
  const { addOrEdit, department, username, searchName } = props;

  const setValue = (e) => {
    let { name, value } = e.target;
    if (name === 'username') {
      setName(value)
    } else if (name === 'department') {
      setDepartment(value)
    }
  }

  return (
    <div className={FormCSS.box}>
      <div>
        <label>
          <input type='text' name='username'
            className={FormCSS.label}
            placeholder='Username'
            onChange={setValue}
            value={name} />
        </label>
      </div>
      <select name='department'
        className={FormCSS.label}
        onChange={setValue}
        value={department}>
        <option selected value='Work Department'>Work Department</option>
        <option value='Developer'>Developer</option>
        <option value='Intern'>Intern</option>
        <option value='Student'>Student</option>
        <option value='Bachelor'>Bachelor</option>
        <option value='Driver'>Driver</option>
      </select>
      <div>
        <label>
          <input type='text'
            name='search'
            className={FormCSS.label}
            placeholder='Search'
            onChange={setValue}
            value={searchName} />
        </label>
      </div>
      <button type='button' className={FormCSS.button} onClick={addOrEdit({ username, department })}>Submit</button>
    </div >
  )
}


export default Forms;