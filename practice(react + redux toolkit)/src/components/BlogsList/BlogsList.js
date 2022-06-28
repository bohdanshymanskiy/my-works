
import { useSelector } from 'react-redux';
import BlogItem from '../BlogItem/BlogItem';
import './BlogsList.css';

function BlogsList() {
  const blogs = useSelector(state => state.app.activeBlogs)

  return (
    <div className='blogs' >
        {blogs.map((blog, index) => (
            <BlogItem key={index} blog={blog}/>  
        ))}
</div>
  );
}

export default BlogsList;
