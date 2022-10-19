import { Link } from 'react-router-dom';

export const Preview = props => {
  const country = props.country;

  if (!country) return;

  return (
    <>
      <div className="preview" key={country.cioc}>
        <Link
          to={{
            pathname: `countries/${country.name.common}`,
          }}
        >
          <img
            className="country__flag preview__flag"
            src={country?.flags.png}
            alt={country.name.common + ' flag'}
          />
          <div className="preview__info">
            <h3 className="preview__name">{country.name.common}</h3>
            <p className="preview__population">
              Population: {country.population}
            </p>
            <p className="preview__region">Region: {country.region}</p>
            <p className="preview__capital">Capital: {country.capital}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
