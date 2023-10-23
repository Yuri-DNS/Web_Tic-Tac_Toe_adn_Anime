import './Menu.css';
import {Link} from 'react-router-dom'

const Menu = props => (
    <>
    <aside className='Menu'>
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/">Game Tic-Tac-Toe</Link></li>
                <li><Link to="/anime">API Anime List</Link></li>
            </ul>
        </nav>
    </aside>
    </>
)
export default Menu;