import React from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from './App';
import { Card } from './component';
import { ThemeProvider } from './ThemeContext';

export const Home = () => {
  const countries = React.useContext(CountriesContext);

  if (!countries) return;

  return (
    <>
      <ThemeProvider>
        {<p>{countries[1]?.name.common}</p>}
        {countries.map(country => (
          <>
            <li className="counrty__preview" key={country?.name.common}>
              <img
                className="country__flag--small"
                src={country?.flags.png}
                alt={country.name.common + ' flag'}
              />
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
