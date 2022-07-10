
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setRender } from '../../store/appSlice';
import Pagination from '../Pagination/Pagination';
import UserItem from '../UserItem/UserItem';
import './UsersList.css';

function UsersList() {
  const users = useSelector(state => state.app.users)
  const render = useSelector(state => state.app.newRender)
  const firstShowUser = useSelector(state => state.app.firstShowUser)
  const lastShowUser = useSelector(state => state.app.lastShowUser)
  const dispatch = useDispatch()

  const showedUsers = users.slice(firstShowUser, lastShowUser)

  useEffect(() => {
    if (render) {
      dispatch(getUsers())
    }
    dispatch(setRender(false))
  })
  
  return (
    <>
      <div className='users' >
        {showedUsers && showedUsers.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default UsersList;
