<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> some code added
import './Navbar.css';

const Navbar = () => {
    return (
<<<<<<< HEAD
         <div className='main-navbar'>
            <div className='navbar'>
            <div className="profile">
                <img  className='profile-img' src="https://lh3.googleusercontent.com/ogw/AGvuzYaX5kHFhCMo8phupzGdAX8ZJWlPMHV5NbPKMmriMA=s32-c-mo" alt="profile image" />
                <a  href='/' className='profile-name'>Emon Hossain</a>
            </div>
            <div className="nav-menu">
                <ul className='menu'>
                    <li className='menu-item'><a href="#home">Home</a></li>
                    <li className='menu-item'><a href="#about">About</a></li>
                    <li className='menu-item'><a href="#prject">Project</a></li>
                    <li className='menu-item'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
         </div>
=======
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
                </div>
            </div>
        </div>
>>>>>>> some code added
    );
};

export default Navbar;