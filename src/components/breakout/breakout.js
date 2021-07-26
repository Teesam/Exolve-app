import './breakout.css';
import { Link } from 'react-router-dom';

const Breakout = () => {
    return (
        <div className = 'Breakout'>
            <div>
                <Link to = '#' id = 'division' >Divisons</Link>
                <i id = 'forward-arrow' className = 'fas fa-chevron-right' ></i>
                <Link to = '#' id = 'module' >Module</Link>
            </div>
        </div>
    )
}

export default Breakout;
