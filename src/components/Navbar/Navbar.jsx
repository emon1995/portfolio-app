import './Navbar.css';

const Navbar = () => {
    return (
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
    );
};

export default Navbar;