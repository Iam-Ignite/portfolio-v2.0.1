import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useModeTheme';
import './navbar.css';

const SubNav = () => {
    const { mode, changeColor } = useTheme()

    const togleMode = () => {
        changeColor(mode === 'dark' ? 'light' : 'dark');
    }
    console.log(mode);

    const [sidebar, setSidebar] = useState(false);
    const sidemenu = {
        width: `${!sidebar ? "" : "100%"}`
    }


    return (
        <nav className={`navbar ${mode}`}>
            <div className="nav-item" >
                <Link className='logo-text' to="/">
                    Back
                </Link>
            </div>
            <div className="nav-item">
                <div className={`sidebar ${mode}`} style={sidemenu}>
                    <span className='close' onClick={() => setSidebar(!sidebar)}>&times;</span>
                </div>
                <label className="switch">
                    <input id="mode" className="input-field" type="checkbox" />
                    <span className="slider-btn22" onClick={togleMode}></span>
                </label>
                <span className='menu' onClick={() => setSidebar(!sidebar)}>☰</span>
            </div>

        </nav>
    );
}

export default SubNav;