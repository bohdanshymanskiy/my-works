
import { useDispatch, useSelector } from 'react-redux';
import ToolItem from '../ToolItem/ToolItem';
import './ToolsList.css';

function ToolsList() {

const tools = useSelector(state => state.app.tools)

  return (
    <div className='tools' >
        <h3>Browse by Tools</h3>
        <div className='tools-container'>
            {tools.map(tool => (
                <ToolItem key={tool.id} tool={tool}/>  
            ))}
        </div>
    </div>
  );
}

export default ToolsList;
