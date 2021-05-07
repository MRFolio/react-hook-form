import { useEffect, useState } from 'react';

const Timer = ({ paused }) => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!paused) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0 || paused) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <p>
          {' '}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </>
  );
};

export default Timer;
