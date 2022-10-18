import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './Card';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

export const CountriesContext = React.createContext();

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const request = fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCountries(data);
      });
    console.log(countries);
    // make a context to share the data that i get from the api
    // display all the countries when at first
    // make so when a country is clicked you get routed to a page that shows more info about the country you selected
    // and have a back button to get back to home page
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path={'/'}
          element={
            <CountriesContext.Provider value={countries}>
              <Home />
            </CountriesContext.Provider>
          }
        />
        <Route
          path={'/countries/:country'}
          element={
            <CountriesContext.Provider value={countries}>
              <Card />
            </CountriesContext.Provider>
          }
        />
        <Route
          path={'/filter/:filter'}
          element={
            <CountriesContext.Provider value={countries}>
              <Home />
            </CountriesContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
