import { StrictMode, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ThemeContext from './components/theme/ThemeContext';
import Home from './pages/Home';
import WrappedDetails from './pages/Details';

const App = () => {
  const theme = useState(ThemeContext);

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
