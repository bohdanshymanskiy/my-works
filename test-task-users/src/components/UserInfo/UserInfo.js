import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewUser, editUser, setSelectUser } from '../../store/appSlice';
import './UserInfo.css';

function UserInfo() {
  const dispatch = useDispatch()
  const selectUser = useSelector(state => state.app.selectUser)

  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    desc: ''
  })

  useEffect(() => {
    setNewUser(selectUser)
  }, [selectUser])

  const changeValue = (event) => {
    const { name, value } = event.target;
    setNewUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (selectUser.hasOwnProperty('desc')) {
      dispatch(editUser(newUser))
      dispatch(setSelectUser({}))
    } else {
      if (Object.entries(newUser).every(item => item[1])) {
        const newUserInfo = { ...newUser, _id: Date.now() }
        dispatch(addNewUser(newUserInfo))
      }
    }
    setNewUser({
      name: '',
      surname: '',
      desc: ''
    })
  }
  return (
    <div className='form'>
      <input
        className='user-info'
        name="name"
        type="text"
        placeholder='Enter name'
        value={newUser.name}
        onChange={(e) => changeValue(e)} />
      <input
        name="surname"
        className='user-info'
        type="text"
        placeholder='Enter surname'
        value={newUser.surname}
        onChange={(e) => changeValue(e)} />
      <textarea
        name="desc"
        className='desc'
        type="text"
        placeholder='Write a description'
        value={newUser.desc}
        onChange={(e) => changeValue(e)} />
      <button type='button'
        className='submit'
        onClick={() => { handleSubmit() }}>
        Send
      </button>
    </div>
  );
}

export default UserInfo;
