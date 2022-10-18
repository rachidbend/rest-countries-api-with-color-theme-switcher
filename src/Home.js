import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from './App';
import { Card } from './component';
import { ThemeProvider } from './ThemeContext';

export const Home = () => {
  const countries = React.useContext(CountriesContext);

  return (
    <>
      <ThemeProvider>
        {<p>{countries[1]?.name.common}</p>}
        {countries.map(country => (
          <>
            <li key={country?.name.common}>
              <p>{country?.name.common}</p>
              <Link
                to={{
                  pathname: `/countries/${country?.name.common}`,
                }}
              >
                Click here
              </Link>
            </li>
          </>
        ))}
        <Card />
      </ThemeProvider>
    </>
  );
};
