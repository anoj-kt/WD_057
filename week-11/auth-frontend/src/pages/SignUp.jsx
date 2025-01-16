import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const firstName = formdata.get('firstName');
    const lastName = formdata.get('lastName');
    const username = formdata.get('username');
    const email = formdata.get('email');
    const password = formdata.get('password');
    const confirmPassword = formdata.get('confirmPassword');

    //Validation
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return alert('Pls fill in all fields');
    }

    if (password !== confirmPassword) {
      return alert('Passwords are not matching');
    }

    const newUserData = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    //Posting the data
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/register',
        newUserData
      );
      console.log(res);
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
              First name <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            name='firstName'
          />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Last name <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            name='lastName'
          />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Username <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            name='username'
          />
        </label>
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Email <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='email'
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
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text text-xl'>
              Confirm Password <span className='text-red-400'>&#42;</span>
            </span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            name='confirmPassword'
          />
        </label>
        <button className='btn btn-primary w-full'>Sign Up</button>
        <Link to='/signin' className='hover:underline'>
          Already registered? Sign In
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
