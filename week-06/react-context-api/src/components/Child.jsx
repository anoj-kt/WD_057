import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div className='bg-blue-300 p-4 m-4 text-center font-bold text-2xl'>
      Child
      <GrandChild />
    </div>
  );
};

export default Child;
