import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const email = formdata.get('email');
    const password = formdata.get('password');

    // Validation
    if (!email || !password) {
      return alert('Pls enter all fields');
    }

    const userCredentials = {
      email,
      password,
    };

    //Posting the data
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/login',
        userCredentials,
        { withCredentials: true }
      );
      setUser(res.data.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='my-4'>
      <form
        className='max-w-72 min-h-[80vh] mx-auto flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Email <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            name='email'
          />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Password <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            name='password'
          />
        </label>
        <button className='btn btn-primary w-full'>Sign In</button>
        <Link to='/signup' className='hover:underline'>
          Not registered yet? Sign Up
        </Link>
      </form>
    </main>
  );
};

export default SignIn;
