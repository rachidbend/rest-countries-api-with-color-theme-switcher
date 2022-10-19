import React from 'react';
import { CountriesContext } from './App';
import { Preview } from './Preview';
import { ThemeProvider } from './ThemeContext';

export const Home = () => {
  const countries = React.useContext(CountriesContext);

  if (!countries) return;

  return (
    <>
      <ThemeProvider>
        <div className="countries__container">
          {countries.map(country => (
            <Preview country={country} />
          ))}
        </div>
      </ThemeProvider>
    </>
  );
};
