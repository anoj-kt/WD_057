import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';

const MainLayout = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </>
  );
};

export default MainLayout;
