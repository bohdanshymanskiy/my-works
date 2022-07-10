

import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../store/appSlice';
import './Pagination.css';

function Pagination() {
  const users = useSelector(state => state.app.users)
  const usersPerPage = useSelector(state => state.app.usersPepPage)
  const pages = new Array(Math.ceil(users.length / usersPerPage)).fill('').map((_, index) => index + 1)
  const activePage = useSelector(state => state.app.currentPage)


  const dispatch = useDispatch()

  //console.log();

  return (
    <div className='pagination' >
      {pages.map((page, index) => (
        <button key={index} className={`page ${activePage === page ? 'active-page' : ''}`}
          onClick={() => dispatch(setActivePage(page))}>
          {page}
        </button>
      ))
      }
    </div >
  );
}

export default Pagination;