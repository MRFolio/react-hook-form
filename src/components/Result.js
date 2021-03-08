import styles from './Result.module.scss';

const Result = () => {
  return (
    <div className={styles.container}>
      <h3>Form summary</h3>
      <div className={styles.fileContent}>FileContent text:</div>
    </div>
  );
};

export default Result;
