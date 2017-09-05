import React, {Component} from 'react';

const WeatherMessage = ({temp, location, country, cond}) => {
  const loc = location.charAt(0).toUpperCase() + location.slice(1);
  const condition = cond.charAt(0).toUpperCase() + cond.slice(1);
  const temperature = Math.round(temp);
  return (
    <div>
      <table className="unstriped">
        <thead>
          <tr>
            <th width="100">Location</th>
            <th width="50">Temperature</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{loc}, {country}</td>
            <td>{temperature}&deg;C</td>
            <td>{condition}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default WeatherMessage;
