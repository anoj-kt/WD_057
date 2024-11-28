import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const GrandChild = () => {
  const { user, signIn, signOut } = useContext(AuthContext);

  const signInHandler = () => {
    //Getting below info from backend after confirming authentication
    const user = {
      name: 'Anoj',
      email: 'anoj@gmail.com',
    };

    signIn(user);
  };

  return (
    <div className='bg-green-300 p-4 m-4 text-center font-bold text-2xl'>
      GrandChild
      <p>{user ? `Welcome back ${user.name}` : 'Pls sign in'}</p>
      <button
        className='bg-slate-300 p-2 rounded-md text-sm'
        onClick={user ? signOut : signInHandler}
      >
        {user ? 'Sign Out' : 'Sign In'}
      </button>
    </div>
  );
};

export default GrandChild;
