import { createContext } from 'react';

export const theme = {
  button: {
    backgroundColor: 'darkred',
    color: '#333',
  },
  heading: {
    fontSize: '2.75rem',
    color: '#333',
    lineHeight: 1.5,
  },
};

let ThemeContext = createContext([theme, () => {}]);

export default ThemeContext;
