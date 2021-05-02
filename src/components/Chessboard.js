import { useState } from 'react';
import styles from './Chessboard.module.scss';

const Chessboard = () => {
  const [time, setTime] = useState(0);

  const handleRematchClick = () => {
    // timer start
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
        <div className={styles.clockTop}>{time}</div>
        <div className={styles.user}>
          <div className={styles.circle}></div>
          <p className={styles.name}>alihanturgut</p>
          <p className={styles.rating}>1378</p>
        </div>
        <div className={styles.controls}>
          {' '}
          <div onClick={handleRematchClick} className={styles.button}>
            Rematch
          </div>
          <div className={styles.rematch}>New Opponent</div>
        </div>
        <div className={styles.user}>tresta2323</div>
        <div className={styles.clockBottom}>03:00</div>
      </div>
    </section>
  );
};

export default Chessboard;
