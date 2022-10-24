import React, { useEffect, useState } from 'react';
import './App.css';
import { FullView } from './FullView';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './Header';
import { RegionFilter } from './RegionFilter';

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

    // https://restcountries.com/v3.1/name/morocco
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
            <div>
              <CountriesContext.Provider value={countries}>
                <Header />
                <Home />
              </CountriesContext.Provider>
            </div>
          }
        />
        <Route
          path={'/countries/:country'}
          element={
            <div className=" fullview-background">
              <CountriesContext.Provider value={countries}>
                <Header />
                <FullView />
              </CountriesContext.Provider>
            </div>
          }
        />
        <Route
          path={'/region/:region'}
          element={
            <div>
              <CountriesContext.Provider value={countries}>
                <Header />
                <Home />
              </CountriesContext.Provider>
            </div>
          }
        />

        <Route
          path={'/search/:search'}
          element={
            <div>
              <CountriesContext.Provider value={countries}>
                <Header />
                <Home />
              </CountriesContext.Provider>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
