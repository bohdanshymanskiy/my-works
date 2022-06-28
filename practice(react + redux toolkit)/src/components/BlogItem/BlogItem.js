import moment from 'moment';
import Ramon from '../../assets/img/Ramon.png'
import './BlogItem.css';

function BlogItem({blog}) {


  return (
    <div className='blog-container'>
      <div className='blog-logo'>
        <img src={Ramon} alt='Ramon'/>
      </div>
      <div className='blog-title'>
        <div className='blog-id'>{blog.toolID}</div>
        <div className='title'>
          {blog.title}
        </div>
      </div>
      <div className='blog-info'>
        <div className='blog-author'>
          {blog.author}
        </div>
        <div className='blog-date'>
          {moment(blog.date).format('MMM DD, YYYY')}
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
