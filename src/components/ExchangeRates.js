import { gql, useQuery } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "EUR") {
      currency
      rate
      name
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate, name }) => (
    <div key={currency}>
      <p>
        {name} | {currency}: {rate}
      </p>
    </div>
  ));
};

export default ExchangeRates;
