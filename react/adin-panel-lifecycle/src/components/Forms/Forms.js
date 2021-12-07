import React from "react";
import FormCSS from './Forms.module.css'

const nameUser = 'username';
const departmentUser = 'department';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, department: null };
  }

  setValue = (e) => {
    const { name, value } = e.target;
    if (name === nameUser) {
      this.setState({ username: value })
    } else if (name === departmentUser) {
      this.setState({ department: value })
    }
  }

  addOrEdit = () => {
    const { username, department } = this.state;
    const { addUsers } = this.props;
    if (!username || !department) {
      window.alert('Please fill all forms')
    } else {
      addUsers({ username, department })
    }
    this.setState({ username: null, department: null });
  }

  componentWillReceiveProps = (props) => {
    const { username, department } = props;
    this.setState({ username, department })
  }

  render() {
    const { username, department } = this.state;
    return (
      <div className={FormCSS.box}>
        <div>
          <label>
            <input type='text' name={nameUser}
              className={FormCSS.label}
              placeholder='Username'
              onChange={this.setValue}
              value={username || ''} />
          </label>
        </div>
        <select name={departmentUser}
          className={FormCSS.label}
          onChange={this.setValue}
          value={department || 'Work Department'}>
          <option selected value='Work Department'>Work Department</option>
          <option value='Developer'>Developer</option>
          <option value='Intern'>Intern</option>
          <option value='Student'>Student</option>
          <option value='Bachelor'>Bachelor</option>
          <option value='Driver'>Driver</option>
        </select>
        <button type='button' className={FormCSS.button} onClick={this.addOrEdit}> Submit</button>
      </div >
    )
  }

}

export default Forms;