import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <NavLink to='/'>
            <li>All Movies</li>
          </NavLink>
          <NavLink to='/comedy'>
            <li>Comedy</li>
          </NavLink>
          <NavLink to='/scifi'>
            <li>Sci-fi</li>
          </NavLink>
          <NavLink to='/animation'>
            <li>Animation</li>
          </NavLink>
          <NavLink to='/action'>
            <li>Action</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
