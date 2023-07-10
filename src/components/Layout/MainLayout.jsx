
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <div className="footer-main">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;