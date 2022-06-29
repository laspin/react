import { render } from 'react-dom';
import { StrictMode, useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WrappedDetails from './pages/Details';
import ThemeContext from './components/theme/ThemeContext';

const App = () => {
  const theme = useState(ThemeContext);

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
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
                element={<WrappedDetails />}
              />
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
