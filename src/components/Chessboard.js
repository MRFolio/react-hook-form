import { useState } from 'react';
import styles from './Chessboard.module.scss';
import Timer from './Timer';

const Chessboard = () => {
  const [time, setTime] = useState(0);
  const [userInfoShown, setUserInfoShown] = useState(false);
  const [currentActiveMove, setCurrentActiveMove] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleRematchClick = () => {
    setPaused(!paused);
    // timer start
  };

  const handleMouseEnter = () => {
    setUserInfoShown(true);
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
        <div></div>
        <div className={styles.clockTop}>
          <Timer paused={paused} />
        </div>
        <div className={styles.user}>
          <div className={styles.circle}></div>
          <p onMouseEnter={handleMouseEnter} className={styles.name}>
            alihanturgut
          </p>
          <p className={styles.rating}>1378</p>
          {userInfoShown && <article></article>}
        </div>
        <div className={styles.buttons}>
          <button type="button">Flip board</button>
          <button disabled type="button">
            Flip board
          </button>
          <button type="button">Flip board</button>
          <button type="button">Flip board</button>
          <button type="button">Flip board</button>
        </div>
        <div className={styles.controls}>
          {' '}
          <button onClick={handleRematchClick} className={styles.button}>
            Rematch
          </button>
          <button className={styles.rematch}>New Opponent</button>
        </div>
        <div className={styles.user}>
          {' '}
          <div className={styles.circle}></div>
          <p className={styles.name}>alihanturgut</p>
          <p className={styles.rating}>1378</p>
        </div>
        <div className={styles.clockBottom}>03:00</div>
      </div>
    </section>
  );
};

export default Chessboard;
