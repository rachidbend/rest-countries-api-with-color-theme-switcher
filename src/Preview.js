import { Link } from 'react-router-dom';
import './Preview.css';

export const Preview = props => {
  const country = props.country;

  if (!country) return;

  return (
    <>
      <div className="preview" key={country.cioc}>
        <Link
          to={{
            pathname: `/countries/${country.name.common}`,
          }}
        >
          <div
            className="preview-flag-container"
            style={{ backgroundImage: `url(${country.flags.png})` }}
          >
            {/* <img
            className="country__flag preview__flag"
            src={country?.flags.png}
            alt={country.name.common + ' flag'}
          /> */}
          </div>
          <div className="preview__info">
            <h3 className="preview__name">{country.name.common}</h3>
            <p className="preview__population">
              <span className="preview__headline"> Population:</span>{' '}
              {new Intl.NumberFormat('en-IN').format(country.population)}
            </p>
            <p className="preview__region">
              <span className="preview__headline"> Region:</span>{' '}
              {country.region}
            </p>
            <p className="preview__capital">
              <span className="preview__headline">Capital: </span>
              {country.capital}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
