import React from 'react';
import { useParams } from 'react-router';
import { CountriesContext } from './App';
import { Preview } from './Preview';
import { RegionFilter } from './RegionFilter';
import { SearchFilter } from './SearchFilter';
import { ThemeProvider } from './ThemeContext';
import { useCustomSearchParams } from './useCustomSearchParams';

export const Home = () => {
  // Search logic
  const [search, setSearch] = useCustomSearchParams();

  //////////////////
  // get all of the countries
  const countries = React.useContext(CountriesContext);
  // get which region filter is use, or if none is used
  const { region } = useParams();

  // if there are no countries, exit and whait untill there are
  if (!countries) return;

  // creat a filterd countries so that:
  let filterdCountries = [];
  // if a region was selected, we'd get the countries that are in that region
  if (region) {
    filterdCountries = countries.filter(country => {
      return country.region === region;
    });
  }
  // and if no region was selected, we'd show all the countries
  if (!region) filterdCountries = countries;

  if (search.country) {
    filterdCountries = countries.filter(country => {
      return country.name.common
        .toLowerCase()
        .includes(search.country.toLowerCase(), 0);
    });

    // filterdCountries = countries.filter(country => {
    //   return [...country.name.common].indludes(search.country);
    // });
  }

  if (!search.country || search.country === '') filterdCountries = countries;

  return (
    <>
      <ThemeProvider>
        <div className="filters__container">
          <SearchFilter />
          <RegionFilter />
        </div>
        <div className="countries__container">
          {filterdCountries.map(country => (
            <Preview country={country} />
          ))}
        </div>
      </ThemeProvider>
    </>
  );
};
