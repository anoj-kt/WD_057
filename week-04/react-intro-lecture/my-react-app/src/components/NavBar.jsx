import Button from './Button';

const NavBar = () => {
  const isLoggedIn = true;

  return (
    <nav className='bg-orange-400 p-2 flex justify-between'>
      <h2>NavBar</h2>

      {/* {Math.random() > 0.5 ? <Button /> : <h1>Pls sign in</h1>} */}
      {isLoggedIn && <Button />}
    </nav>
  );
};

export default NavBar;
