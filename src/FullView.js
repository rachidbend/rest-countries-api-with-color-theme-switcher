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
      <button className="btn btn--back" onClick={goBack}>
        <span className="back--arrow">&larr;</span>
        Back
      </button>
      <div className="fullview__container">
        <div className="country__flag">
          <img src={country.flags.svg} alt={country.name.common + ' flag'} />
        </div>
        <div className="country__info">
          <h3 className="country__name">{country.name.common}</h3>
          <div className="country__info--container">
            <div className="country__info-col">
              <p className="country__name--native">
                <span className="info--headline">Native Name:</span>{' '}
                {Object.values(country.name.nativeName)[0].official}
              </p>
              <p className="country__population">
                <span className="info--headline">Population:</span>{' '}
                {new Intl.NumberFormat('en-IN').format(country.population)}
              </p>
              <p className="country__region">
                <span className="info--headline">Region:</span> {country.region}
              </p>
              <p className="country__sub-region">
                <span className="info--headline">Sub Region:</span>{' '}
                {country.subregion}
              </p>
              <p className="country__capital">
                <span className="info--headline">Capital:</span>{' '}
                {country.capital[0]}
              </p>
            </div>
            <div className="country__info-col">
              <p className="country__top-level-domain">
                <span className="info--headline">Top Level Domain:</span>{' '}
                {country.tld[0]}
              </p>
              <p className="country__currencies">
                <span className="info--headline">Currencies:</span>{' '}
                {Object.values(country.currencies)[0].name}
              </p>
              <p className="country__languages">
                <span className="info--headline">Languages:</span>{' '}
                {Object.values(country.languages).join(', ')}
              </p>
            </div>
          </div>

          <div className="country__borders">
            <span className="info--headline">Border Countries:</span>{' '}
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
