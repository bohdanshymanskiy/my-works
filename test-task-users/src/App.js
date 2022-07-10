
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getUsers } from './store/appSlice';
import Header from './components/Header/Header';
import UserInfo from './components/UserInfo/UserInfo';
import UsersList from './components/UserList/UsersList';

function App() {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div  className='container'>
     <Header/>
     <UserInfo/>
     <UsersList/>
    </div>
  );
}

export default App;
