import React from "react";
import FormCSS from './Forms.module.css'


class Forms extends React.Component {

  render() {

    const { addOrEdit, setValue, department, username, searchName } = this.props;
    return (
      <div className={FormCSS.box}>
        <div>
          <label>
            <input type='text' name='username'
              className={FormCSS.label}
              placeholder='Username'
              onChange={setValue('username')}
              value={username} />
          </label>
        </div>
        <select name='select'
          className={FormCSS.label}
          onChange={setValue('department')}
          value={department}>
          <option selected>Work Department</option>
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
              onChange={setValue('searchName')}
              value={searchName} />
          </label>
        </div>
        <button type='button' className={FormCSS.button} onClick={addOrEdit({ username, department })}>Submit</button>
      </div >
    )
  }

}

export default Forms;