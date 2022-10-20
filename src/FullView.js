import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CountriesContext } from './App';
import './Fullview.css';

export const FullView = () => {
  const countries = React.useContext(CountriesContext);
  const params = useParams();
  const navigate = useNavigate();
  const [country] = countries.filter(country => {
    return country?.name.common === params.country;
  });

  if (!country) return;
  // console.log(Object.values(country.name.nativeName)[0].official);
  // this is how you get the first item in an object
  console.log(country);
  // go back
  const goBack = () => {
    navigate(-1);
  };

  // bordering countries
  // should find countries based on 'cioc' value
  const countryBorders = country.borders;
  let borderingCountries = [];
  if (countryBorders) {
    borderingCountries = countryBorders
      .map(border => {
        // loop through the list of countries to find which country has a matching code, and return that country
        const data = countries.filter(country => {
          return border === country.cioc || border === country.cca3;
        });

        return data;
      })
      .flat();
  }
  console.log(borderingCountries);

  return (
    <div className="fullview">
      <button onClick={goBack}>back button</button>
      <div className="country__flag">
        <img src={country.flags.png} alt={country.name.common + ' flag'} />
      </div>
      <div className="country__info">
        <h3 className="country__name">{country.name.common}</h3>
        <p className="country__name--native">
          Native Name: {Object.values(country.name.nativeName)[0].official}
        </p>
        <p className="country__population">Population: {country.population}</p>
        <p className="country__region">Region: {country.region}</p>
        <p className="country__sub-region">Sub Region: {country.subregion}</p>
        <p className="country__capital">Capital: {country.capital[0]}</p>
        <p className="country__top-level-domain">
          Top Level Domain: {country.tld[0]}
        </p>
        <p className="country__currencies">
          Currencies: {Object.values(country.currencies)[0].name}
        </p>
        <p className="country__languages">
          Languages: {Object.values(country.languages).map(lang => lang + ', ')}
        </p>

        <div>
          border Countries:{' '}
          {country.borders
            ? borderingCountries.map(border => {
                return (
                  <Link
                    className="country__border"
                    to={{ pathname: `/countries/${border.name.common}` }}
                  >
                    {border.name.common}
                  </Link>
                );
              })
            : 'Is has no bordering countries'}
        </div>
      </div>
    </div>
  );
};

/*
<div className="card">
      <div className="country__flag">
        <img src={country.flags.png} alt={country.name.common + ' flag'} />
      </div>
      <div className="country__info">
        <h3 className="country__name">{country.name.common}</h3>
        <p className="country__name--native">
          Native Name: {country.name.nativeName}
        </p>
        <p className="country__population">Population: {country.population}</p>
        <p className="country__region">Region: {country.region} </p>
        <p className="country__sub-region">Sub Region: {country.subregion}</p>
        <p className="country__capital">Capital: {country.capital[0]}</p>
        <p className="country__top-level-domain">
          Top Level Domain: {country.tld[0]}
        </p>
        <p className="country__currencies">Currencies:</p>
        <p className="country__languages">Languages: </p>

        <div>border Countries:</div>
      </div>
</div>
    */
