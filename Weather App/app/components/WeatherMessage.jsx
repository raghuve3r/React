import React, {Component} from 'react';

const WeatherMessage = ({temp, location, country, cond}) => {
  const loc = location.charAt(0).toUpperCase() + location.slice(1);
  const condition = cond.charAt(0).toUpperCase() + cond.slice(1);
  const temperature = Math.round(temp);
  return (
    <div>
      <table>
        <tbody className="table-test">
          <tr className="head-style">
            <td>Location</td>
            <td>Temperature</td>
            <td>Condition</td>
          </tr>
        </tbody>
        <tbody className="table-test">
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
