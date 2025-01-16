import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const signOut = async () => {
    try {
      await axios.delete('http://localhost:8000/auth/signout', {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='navbar bg-base-100'>
      <Link to='/' className='flex-1'>
        <span className='btn btn-ghost text-xl'>Travel Journal</span>
      </Link>
      <div className='gap-4'>
        <Link to='create'>
          <button className='btn btn-outline btn-primary'>Create Post</button>
        </Link>

        {user ? (
          <button className='btn btn-primary' onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <Link to='signin'>
            <button className='btn btn-primary'>Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
