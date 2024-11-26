import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Outlet is like a placeholder for showing different components */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
