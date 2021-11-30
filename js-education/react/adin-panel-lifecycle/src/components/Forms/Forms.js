import React from "react";
import FormCSS from './Forms.module.css'


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', department: 'Work Department' };
  }

  setValue = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value })
    } else if (name === 'department') {
      this.setState({ department: value })
    }
  }
  componentWillReceiveProps = (props) => {
    const { editId, editUsername, editDepartment } = props;
    if (editId) {
      this.setState({ username: editUsername, department: editDepartment })
    } else {
      return null
    }
  }

  addOrEdit = (user) => () => {
    const { username, department } = this.state;
    const { allUsers, addUsers, editId } = this.props;
    const dateAtMoment = new Date().toUTCString();
    if (username === '' || department === 'Work Department') {
      window.alert('Please fill all forms')
    } else {
      if (editId) {
        this.setState({})
        const editData = allUsers.slice().map(item => {
          if (item.id === editId) {
            item.username = username;
            item.department = department;
            item.dateOfEdit = dateAtMoment;
          }
          return item;
        })
        addUsers(editData)
        this.setState({ username: '', department: 'Work Department' });
      } else {
        const newUser = { id: Date.now(), dateOfCreate: dateAtMoment, dateOfEdit: null, ...user }
        const updatingData = [...allUsers, newUser];
        addUsers(updatingData)
        this.setState({ username: '', department: 'Work Department' });
      }
    }
  }

  render() {
    const { searchValue } = this.props;
    const { username, department, searchName } = this.state;
    return (
      <div className={FormCSS.box}>
        <div>
          <label>
            <input type='text' name='username'
              className={FormCSS.label}
              placeholder='Username'
              onChange={this.setValue}
              value={username} />
          </label>
        </div>
        <select name='department'
          className={FormCSS.label}
          onChange={this.setValue}
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
              onChange={searchValue}
              value={searchName} />
          </label>
        </div>
        <button type='button' className={FormCSS.button} onClick={this.addOrEdit({ username, department })}>Submit</button>
      </div >
    )
  }

}

export default Forms;