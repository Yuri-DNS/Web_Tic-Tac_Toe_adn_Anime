import { Routes, Route } from 'react-router-dom';
import './Content.css';
import NotFound from '../../views/pages/NotFound';
import Game from '../../views/pages/Game';

import './Content.css'
import AnimeList from '../../views/pages/AnimeList';

const Content = props => (
    <>
    <aside className='Content'>
        <Routes>
            <Route path="/" element={<Game/>}/>
            <Route path="/anime" element={<AnimeList/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        
    </aside>
    </>
)
export default Content;