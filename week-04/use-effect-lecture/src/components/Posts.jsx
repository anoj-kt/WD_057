import { useEffect, useState } from 'react';

const Posts = () => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  const addCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const changeTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  //   useEffect(callback function, optional dependency array)
  useEffect(() => {
    console.log('Only once when mounting');

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setAllPosts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log('On every re-render');
  });
  //When does a component rerender?
  //When State changes, when prop changes

  useEffect(() => {
    console.log('Only when darkmode changes');
  }, [darkTheme]);

  return (
    <div>
      <h1>All Posts</h1>
      <button onClick={addCounter} className='bg-blue-500 p-2'>
        Add counter
      </button>
      <p>{counter}</p>

      <button onClick={changeTheme} className='bg-blue-500 p-2'>
        Enable darkmode
      </button>
      <p>{darkTheme ? 'Dark mode enabled' : 'Dark mode disabled'}</p>

      {allPosts.map((post) => (
        <div
          key={post.id}
          className='bg-blue-300 p-2 mb-2 w-3/4 mx-auto rounded-md'
        >
          <p className='text-xl font-bold'>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
