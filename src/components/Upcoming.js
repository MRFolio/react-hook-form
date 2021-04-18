import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

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

const ADD_USER = gql`
  mutation InsertUsers($name: String!) {
    insert_users(objects: { name: $name }) {
      returning {
        name
        id
      }
    }
  }
`;

const Upcoming = () => {
  const [getUpcomingLaunches, { loading, data }] = useLazyQuery(
    UPCOMING_LAUNCHES
  );
  const [insert_users, { data: mutationData }] = useMutation(ADD_USER);
  const [input, setInput] = useState('');

  const handleClick = () => {
    getUpcomingLaunches();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    insert_users({ variables: { name: input } });
    console.log(mutationData);
    setInput('');
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
      <input onChange={handleChange} type="text" name="input" value={input} />
      <button onClick={handleSend} type="button">
        Create new username
      </button>
    </div>
  );
};

export default Upcoming;
