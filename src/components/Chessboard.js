import { useEffect, useState } from 'react';
import styles from './Chessboard.module.scss';
import Timer from './Timer';

const Chessboard = () => {
  const [time, setTime] = useState(0);
  const [userInfoShown, setUserInfoShown] = useState(false);
  const [currentActiveMove, setCurrentActiveMove] = useState(0);
  const [pausedFirst, setPausedFirst] = useState(false);
  const [pausedSecond, setPausedSecond] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      const switchInterval = setInterval(() => {
        setPausedFirst(!pausedFirst);
        setPausedSecond(!pausedSecond);
      }, 5000);

      return () => {
        clearInterval(switchInterval);
      };
    }
  }, [pausedFirst, pausedSecond]);

  const handleResign = () => {
    setGameOver(true);
    setPausedFirst(true);
    setPausedSecond(true);
  };

  const handleRematchClick = () => {
    setPausedSecond(true);
    setPausedFirst(true);
    // timer start
  };

  const handleNewOpponentClick = () => {
    setPausedSecond(false);
    setPausedFirst(false);
  };

  const handleMouseEnter = () => {
    setUserInfoShown(true);
  };

  const handleMouseLeave = () => {
    setUserInfoShown(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.board}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.clockTop}>
          <Timer paused={pausedFirst} />
        </div>
        <div className={styles.user}>
          <div className={styles.circle}></div>
          <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.name}
          >
            alihanturgut
          </p>
          <p className={styles.rating}>1378</p>
          {userInfoShown && (
            <article>
              <h3>Tere3</h3>
            </article>
          )}
        </div>
        <div className={styles.panel}>
          {' '}
          <div className={styles.buttons}>
            <button disabled={gameOver} onClick={handleResign} type="button">
              {gameOver ? 'Game over' : 'Resign'}
            </button>
            <button disabled type="button">
              Flip
            </button>
            <button type="button">Flip </button>
            <button type="button">Flip </button>
            <button type="button">Flip </button>
          </div>
          <div className={styles.controls}>
            <button
              disabled={gameOver}
              onClick={handleRematchClick}
              className={styles.rematch}
            >
              Rematch
            </button>
            <button
              onClick={handleNewOpponentClick}
              className={styles.newOpponent}
            >
              New Opponent
            </button>
          </div>
          <div className={styles.user}>
            {' '}
            <div className={styles.circle}></div>
            <p className={styles.name}>alihanturgut</p>
            <p className={styles.rating}>1378</p>
          </div>
          <div className={styles.clockBottom}>
            <Timer paused={pausedSecond} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chessboard;
