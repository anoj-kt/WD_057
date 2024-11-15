import { useState } from 'react';
import Posts from './components/Posts';
import Timer from './components/Timer';

const App = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const clickHandler = () => {
    setShowPosts((prev) => {
      return !prev;
    });
  };

  return (
    <div className='text-center mt-2 flex flex-col gap-2'>
      <button onClick={clickHandler} className='bg-green-300 p-2'>
        Show Posts
      </button>
      {showPosts && <Posts />}

      <button
        onClick={() => {
          setShowTimer((prev) => !prev);
        }}
        className='bg-green-300 p-2'
      >
        Show Timer
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default App;
