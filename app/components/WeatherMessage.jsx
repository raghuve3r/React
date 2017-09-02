var React = require('react');


var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h3> Weather at {location} is {temp} </h3>
    </div>
  )
};

module.exports = WeatherMessage;
