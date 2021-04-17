import { gql, useLazyQuery } from '@apollo/client';

const UPCOMING_LAUNCHES = gql`
  query GetUpcomingLaunches {
    launchesUpcoming {
      mission_name
      launch_site {
        site_name_long
      }
    }
  }
`;

const Upcoming = () => {
  const [getUpcomingLaunches, { loading, data }] = useLazyQuery(
    UPCOMING_LAUNCHES
  );

  const handleClick = () => {
    getUpcomingLaunches();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Upcoming launches:</h3>
      <button type="button" onClick={handleClick}>
        Show UpComing launches
      </button>
      {data?.launchesUpcoming?.map(
        ({ mission_name, launch_site: { site_name_long } }) => (
          <p key={mission_name}>
            {mission_name} | {site_name_long}{' '}
          </p>
        )
      )}
    </div>
  );
};

export default Upcoming;
