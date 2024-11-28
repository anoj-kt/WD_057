import Child from './Child';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Parent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='bg-orange-300 p-4 m-4 text-center font-bold text-2xl'>
      Parent
      <p>{user ? user.name : 'log in'}</p>
      <Child />
    </div>
  );
};

export default Parent;
