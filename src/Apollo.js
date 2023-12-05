import React from 'react';
import { useQuery } from '@apollo/client';
import {getCountries} from './Query.js';
import './index.css'



const ShowallCountries =() =>{
  const {loading, error, data } = useQuery(getCountries);

  if (loading) return;
  if (error) return;

  let groupByContinent = {};
  data.countries.forEach(country => {
    let continentname = country.continent.name;
    if (!groupByContinent[continentname]) {
      groupByContinent[continentname] = [];
    }
    groupByContinent[continentname].push(country);
  });

  return (
    <div>
      <h1>Country List</h1>
      {Object.entries(groupByContinent).map(([continent, countriesInContinent]) => (
        <div key={continent}>
          <h2>{continent}</h2>
          <tr>
            <th>Country Name</th>
            <th>Emoji</th>
          </tr>
          <tbody>
            {countriesInContinent.map(country => (
              <tr>
                <td>{country.name}</td>
                <td>{country.emoji}</td>
              </tr>
            ))}
          </tbody>
        </div>
      ))}
    </div>
  );
  
}
export default ShowallCountries;