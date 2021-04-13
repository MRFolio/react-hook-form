import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUpload from './FileUpload';
import styles from './Form.module.scss';

const seasons = ['spring', 'summer', 'autumn', 'winter'];
const fruits = ['Bananas', 'Apples', 'Strawberries', 'Grapes', 'Oranges'];

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const [images, setImages] = useState([]);

  // const [formInput, setFormInput] = useState({
  //   firstName: '',
  //   surname: '',
  //   favoriteSeason: '',
  //   file: {},
  //   subscribe: false,
  // });

  // const { firstName, subscribe, surname } = formInput;

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const name = target.name;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   setFormInput({ ...formInput, [name]: value });
  // };

  //

  const handleClick = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const { message } = await response.json();
      setImages([message, ...images]);

      return message;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
    setImages([]);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }
      );
      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Fill in the form to win prizes!</h2>
      <div className={styles.formRow}>
        <label htmlFor="name">First name:</label>
        <input
          ref={register({
            required: true,
            minLength: 2,
          })}
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
        />
        {errors.name && errors.name.type === 'required' && (
          <span className={styles.errorMessage}>This field is required</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <span className={styles.errorMessage}>
            Minimum of 2 characters is required
          </span>
        )}
      </div>
      <div className={styles.formRow}>
        <label htmlFor="name">Surname:</label>
        <input
          ref={register({
            required: true,
            minLength: 2,
          })}
          type="text"
          name="surname"
          id="surname"
          data-testid="surname"
          placeholder="Enter surname..."
        />
        {errors.surname && errors.surname.type === 'required' && (
          <span className={styles.errorMessage}>This field is required</span>
        )}
        {errors.surname && errors.surname.type === 'minLength' && (
          <span className={styles.errorMessage}>
            Minimum of 2 characters is required
          </span>
        )}
      </div>
      <div className={styles.formRow}>
        <p className={styles.seasonText}>Favorite time of the year:</p>
        {seasons.map((season) => (
          <span key={season} className={styles.seasons}>
            <input
              ref={register({ required: true })}
              type="radio"
              name="favoriteSeason"
              id="favoriteSeason"
              value={season}
              // onChange={handleChange}
            />
            <label htmlFor={season}>{season}</label>
            {errors.favoriteSeason && (
              <span className={styles.errorMessage}>
                This field is required
              </span>
            )}
          </span>
        ))}
      </div>
      <div className={styles.formRow}>
        <label htmlFor="subscribe">
          Do you wish to subscribe to the newsletter?
        </label>
        <input
          ref={register({ required: true })}
          type="checkbox"
          name="subscribe"
          id="subscribe"
        />
        {errors.subscribe && (
          <span className={styles.errorMessage}>This field is required</span>
        )}
      </div>
      <div className={styles.formRow}>
        <label htmlFor="textarea">Type something</label>
        <textarea
          id="textarea"
          className="tere"
          data-testid="textbox"
          name="greeting"
        ></textarea>
      </div>
      <span data-testid="html-element">
        <span>Html Element</span>
      </span>
      <svg data-testid="svg-element"></svg>
      <FileUpload
        label="Choose a file to upload:"
        register={register}
        required
      />
      {errors.uploadedFile && (
        <span className={styles.errorMessage}>File upload is required</span>
      )}
      <div>
        <button type="submit" className={styles.submitButton}>
          submit
        </button>
      </div>
      <div className="tere">
        <div className={styles.btnContainer}>
          {' '}
          <button onClick={handleClick} type="button">
            Fetch Dog
          </button>
          <button onClick={handleClear} type="button">
            Clear dog images
          </button>
        </div>
        <div className={styles.pictureContainer}>
          {images?.map((item) => (
            <figure key={item}>
              <img
                className={styles.picture}
                src={item}
                alt={`${item.slice(30, 46)}`}
              />
              <figcaption>{`${item.slice(30, 46)}`}</figcaption>
            </figure>
          ))}
        </div>
        <section>
          <h1>Fruits</h1>
          <ul aria-label="fruits">
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </section>
      </div>
    </form>
  );
};

export default Form;
