import { gql, useQuery } from '@apollo/client';
import styles from './SpaceX.module.scss';
import Upcoming from './Upcoming';

const SPACEX_SHIPS = gql`
  query GetShips {
    ships(limit: 10) {
      image
      name
      missions {
        flight
        name
      }
      id
    }
  }
`;

const SpaceX = () => {
  const { loading, error, data } = useQuery(SPACEX_SHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className={styles.container}>
      <h2>SPACE-X SEA SHIPS</h2>
      {data?.ships?.map(({ id, image, missions, name }) => (
        <figure key={id}>
          <img src={image} alt={`${name} in action`} />
          <figcaption>First mission: {missions[0].name}</figcaption>
        </figure>
      ))}
      <Upcoming />
    </section>
  );
};

export default SpaceX;
