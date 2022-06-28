import { render } from 'react-dom';
import { StrictMode } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './pages/Details';

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <h1>
            <Link to="/">Pets R Us</Link>
          </h1>
        </header>
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/details/:id"
              element={<Details />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
