import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setSelectUser } from '../../store/appSlice';
import './UserItem.css';

function UserItem({ user }) {
  const { name, surname, user_id, desc } = user
  const selectUser = useSelector(state => state.app.selectUser)

  const dispatch = useDispatch()
  return (
    <div className={`user-container ${selectUser.user_id === user_id ? 'active' : ''}`}>
      <h3>{`${name} ${surname}`.length > 30 ? `${name} ${surname}`.substr(0, 30) : `${name} ${surname}`}</h3>
      <div className='description'><span>{desc?.length > 50 ? desc.substr(0, 50) : desc}</span></div>
      <div className='buttons'>
        <button className='button edit'
          onClick={() => dispatch(setSelectUser(user))}>Edit</button>
        <button className='button delete'
          onClick={() => dispatch(deleteUser(user_id))}>Delete</button>
      </div>
    </div>
  );
}

export default UserItem;
