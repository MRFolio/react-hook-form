import { useCallback, useEffect, useState } from 'react';
import styles from './Result.module.scss';

const { REACT_APP_API_KEY } = process.env;
const url = `https://api.openweathermap.org/data/2.5/weather?q=tartu&appid=${REACT_APP_API_KEY}`;

const Result = () => {
  const [info, setInfo] = useState('');

  const getInfo = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const [{ description }] = data.weather;

      setInfo(description);

      return data.base;
    } catch (error) {}
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div className={styles.container}>
      <h3>Form summary</h3>
      <p data-testid="para" className={styles.info}>
        {info}
      </p>
      <div className={styles.fileContent}>FileContent text:</div>
    </div>
  );
};

export default Result;
