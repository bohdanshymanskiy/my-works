import { useSelector, useDispatch } from 'react-redux';
import { changeValue, filterTools } from '../../store/appSlice';
import './ProductNews.css';

function ProductNews() {
    const searchValue = useSelector(state => state.app.searchValue)
    const dispatch = useDispatch()
    console.log(searchValue);

  return (
    <div className='product-news'>
      <div className='products-news-container'>
        <div className='products-news-title'>
            Top product news, content marketing tips, and insights.
        </div>
        <div className='products-news-search'>
            <label>
                <input type='text' placeholder='Search Tools' value={searchValue} onChange={(e) => dispatch(changeValue(e.target.value))}/>
            </label>
            <button className='button-search' onClick={() => dispatch(filterTools(searchValue))}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default ProductNews;
