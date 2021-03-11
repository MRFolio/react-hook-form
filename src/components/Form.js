import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';

const seasons = ['spring', 'summer', 'autumn', 'winter'];

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
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
      console.log(result);

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
          <span>This field is required</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <span>Minimum of 2 characters is required</span>
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
        {errors.name && errors.name.type === 'required' && (
          <span>This field is required</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <span>Minimum of 2 characters is required</span>
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
            {errors.favoriteSeason && <span>This field is required</span>}
          </span>
        ))}
      </div>
      <div className={styles.formRow}>
        <label htmlFor="subscribe">
          Do you wish to subscribe to the newsletter?
        </label>
        <input
          ref={register}
          // onChange={handleChange}
          type="checkbox"
          name="subscribe"
          id="subscribe"
          role="checkbox"
          // value={subscribe}
        />
        {errors.subscribe && <span>This field is required</span>}
      </div>
      <span data-testid="html-element">
        <span>Html Element</span>
      </span>
      <svg data-testid="svg-element"></svg>
      <div>
        <button type="submit" className={styles.submitButton}>
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
