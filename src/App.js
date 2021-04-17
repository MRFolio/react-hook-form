import ExchangeRates from './components/ExchangeRates';
import Form from './components/Form';
import Result from './components/Result';
import SpaceX from './components/SpaceX';

function App() {
  return (
    <main className="main">
      <SpaceX />
      <Form />
      <Result />
      <ExchangeRates />
    </main>
  );
}

export default App;
