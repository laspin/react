import { render } from 'react-dom';
import { StrictMode } from 'react';
import SearchParams from './components/SearchParams';

const App = () => {
  return (
    <StrictMode>
      <div className="app-wrapper">
        <h1>Pets R Us</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
