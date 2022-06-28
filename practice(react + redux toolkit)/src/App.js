
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Header from './components/Header/Header';
import ProductNews from './components/ProductNews/ProductNews';
import { getTools, getBlogs } from './store/appSlice';
import ToolsList from './components/ToolsList/ToolsList';
import BlogsList from './components/BlogsList/BlogsList';
import './App.css';

function App() {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTools())
    dispatch(getBlogs())
  }, [dispatch])

  return (
    <div >
      <Header/>
      <ProductNews/>
      <ToolsList/>
      <BlogsList/>
    </div>
  );
}

export default App;
