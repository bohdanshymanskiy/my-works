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


  render() {
    const { username, age, gender } = this.state;
    const { addGuest } = this.props;
    return (
      <div className={FormCSS.box}>
        <div>
          <label>First name:
            <input type='text' onChange={(e) => this.setState({ username: e.target.value })} value={username} />
          </label>
        </div>
        <div>
          <label>Age:
            <input type='number' onChange={(e) => this.setState({ age: e.target.value })} value={age} />
          </label>
        </div>
        <select name='select' onChange={(e) => this.setState({ gender: e.target.value })} value={gender}>
          <option selected disabled value='Your Gender'>Your gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <div>
          <button type='button' onClick={() => addGuest(this.state)}>Submit</button>
        </div>
      </div >
    )
  }

}

export default Forms;