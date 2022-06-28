
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveBlogs, setActiveTool} from '../../store/appSlice';
import img from '../../assets/img/tool.png'
import './ToolItem.css';

function ToolItem({tool}) {
  const dispatch = useDispatch()
  const activeTool= useSelector(state => state.app.activeTool)


  return (
    <div className={`tool-container ${activeTool === tool.id ? 'active' : ''}`} onClick={(e) => {dispatch(setActiveTool(tool.id)); dispatch(setActiveBlogs(tool.id))}}>
      <div className='tool-logo'>
        <img src={img} alt='tool-logo'/>
      </div>
      <div className='tool-title'>
      {tool.title}
      </div>
    </div>
  );
}

export default ToolItem;
