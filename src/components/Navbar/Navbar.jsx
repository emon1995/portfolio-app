import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    // const [screenWidth] = useMediaQuery("(max-width: 768px)");

    return (
        <div className='main-navbar'>
            <div className='navbar'>
                <div className="profile">
                    <img className='profile-img' src="https://lh3.googleusercontent.com/ogw/AGvuzYaX5kHFhCMo8phupzGdAX8ZJWlPMHV5NbPKMmriMA=s32-c-mo" alt="profile image" />
                    <a href='/' className='profile-name'>Emon Hossain</a>
                </div>
                <div className="nav-menu">
                    <ul className='menu'>
                        <li className='menu-item'><Link to="/">Home</Link></li>
                        <li className='menu-item'><Link to="/about">About</Link></li>
                        <li className='menu-item'><Link to="/projects">Projects</Link></li>
                        <li className='menu-item'><Link to="/contact">Contact</Link></li>
                    </ul>
                    {
                        isNavbarCollapsed && <ul className='mobile-menu'>
                            <li className='menu-item'><Link to="/">Home</Link></li>
                            <li className='menu-item'><Link to="/about">About</Link></li>
                            <li className='menu-item'><Link to="/projects">Projects</Link></li>
                            <li className='menu-item'><Link to="/contact">Contact</Link></li>
                        </ul>
                    }
                    {(
                        <p
                            onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
                            className="navbar-toggle"
                        >
                            {isNavbarCollapsed ? <FiMenu /> : <FiMenu />}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;