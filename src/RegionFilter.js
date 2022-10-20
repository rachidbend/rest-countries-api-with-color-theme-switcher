import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

export const RegionFilter = () => {
  const navigate = useNavigate();
  const { filter } = useParams();
  // using useEffect to always be able to get the options
  useEffect(() => {
    // selecting the options
    const selectAfrica = document.getElementById('africa');
    const selectAmericas = document.getElementById('america');
    const selectAsia = document.getElementById('asia');
    const selectEurope = document.getElementById('europe');
    const selectOceania = document.getElementById('oceania');
    // when someone selects a country and goes back the select loses its selected state, and this is to make sure that the appropriate option is always selected
    if (filter) {
      if (filter === 'Africa') selectAfrica.selected = true;
      if (filter === 'Americas') selectAmericas.selected = true;
      if (filter === 'Asia') selectAsia.selected = true;
      if (filter === 'Europe') selectEurope.selected = true;
      if (filter === 'Oceania') selectOceania.selected = true;
    }
  }, [filter]);

  // routing for the selected region
  const getSelectedRegion = () => {
    const select = document.getElementById('region');
    const value = select.options[select.selectedIndex].value;
    console.log(value);
    navigate(`/region/${value}`);
  };

  return (
    <div className="region__container">
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
