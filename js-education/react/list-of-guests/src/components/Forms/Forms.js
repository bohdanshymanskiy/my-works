import React from "react";
import FormCSS from './Forms.module.css'


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      age: null,
      gender: null
    }
  }

  setValue = (options) => (e) => this.setState({ [options]: e.target.value })

  render() {
    const { username, age, gender } = this.state;
    const { addGuest } = this.props;
    return (
      <div className={FormCSS.box}>
        <div>
          <label>First name:
            <input type='text' onChange={this.setValue('username')} value={username === null ? '' : username} />
          </label>
        </div>
        <div>
          <label>Age:
            <input type='number' onChange={this.setValue('age')} value={age === null ? '' : age} />
          </label>
        </div>
        <select name='select' onChange={this.setValue('gender')} value={gender === null ? '' : gender}>
          <option selected disabled value='Your Gender'>Your gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <div>
          <button type='button' onClick={() => addGuest({ username, age, gender })}>Submit</button>
        </div>
      </div >
    )
  }

}

export default Forms;