import { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const intervalOne = setInterval(() => {
      console.log('Timer is completed');
    }, 2000);

    //Following will run when the component unmounts
    return () => {
      console.log('Unmounted');
      clearInterval(intervalOne);
    };
  }, []);

  return <div>TIMERRRR</div>;
};

export default Timer;
