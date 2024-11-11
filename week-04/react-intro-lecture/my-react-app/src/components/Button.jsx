const Button = () => {
  const clickHandler = () => {
    alert('You clicked the button!');
  };

  return (
    <button
      onClick={clickHandler}
      className='p-2 bg-blue-200 rounded-md cursor-pointer'
    >
      Button
    </button>
  );
};

export default Button;
