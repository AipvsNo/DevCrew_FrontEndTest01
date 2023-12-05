import React from 'react';
import { useQuery } from '@apollo/client';
import {getCountries} from './Query.js';
import './index.css'

let groupByContinent = {};

function rendering(data){
  data.countries.forEach(c => {
    if (!groupByContinent[c.continent.name]) {
      groupByContinent[c.continent.name] = [];
    }
    else{
      groupByContinent[c.continent.name].push(c);
    }
  });
}

const ShowallCountries =() =>{
  const {loading, error, data } = useQuery(getCountries);
  if (loading) return;
  if (error) return;
  rendering(data);
  return (
    <div>
      <h1>Around The World</h1>
      {Object.entries(groupByContinent).map(([continent, index]) => (
        <div>
          <h2>{continent}</h2>
          <tr>
            <th>Country Name</th>
            <th>Emoji</th>
          </tr>
          <tbody>
            {index.map(c => (
              <tr>
                <td>{c.name}</td>
                <td>{c.emoji}</td>
              </tr>
            ))}
          </tbody>
        </div>
      ))}
    </div>
  );
  
}
export default ShowallCountries;