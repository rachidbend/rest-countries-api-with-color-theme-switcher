import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import './RegionFilter.css';

export const RegionFilter = () => {
  const navigate = useNavigate();
  const { region } = useParams();

  // using useEffect to always be able to get the options
  useEffect(() => {
    // selecting the options
    const selectAfrica = document.getElementById('africa');
    const selectAmericas = document.getElementById('america');
    const selectAsia = document.getElementById('asia');
    const selectEurope = document.getElementById('europe');
    const selectOceania = document.getElementById('oceania');
    // when someone selects a country and goes back the select loses its selected state, and this is to make sure that the appropriate option is always selected
    if (region) {
      if (region === 'Africa') selectAfrica.selected = true;
      if (region === 'Americas') selectAmericas.selected = true;
      if (region === 'Asia') selectAsia.selected = true;
      if (region === 'Europe') selectEurope.selected = true;
      if (region === 'Oceania') selectOceania.selected = true;
    }
  }, [region]);

  // routing for the selected region
  const getSelectedRegion = () => {
    const select = document.getElementById('region');
    const value = select.options[select.selectedIndex].value;
    console.log(value);
    navigate(`/region/${value}`);
  };

  return (
    <div className="region__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 icon-shevron-down"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select
        name="region"
        id="region"
        onChange={() => {
          getSelectedRegion();
        }}
      >
        <option value="choose" disabled selected hidden>
          Filter by Region
        </option>
        <option value="Africa" id="africa">
          Africa
        </option>
        <option value="Americas" id="america">
          America
        </option>
        <option value="Asia" id="asia">
          Asia
        </option>
        <option value="Europe" id="europe">
          Europe
        </option>
        <option value="Oceania" id="oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};
