var React = require('react');


var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h3 className="text-center"> Weather at {location} is {temp} </h3>
    </div>
  )
};

module.exports = WeatherMessage;
