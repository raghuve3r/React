var React = require('react');

var About = (props) => {
  return (
      <div>
        <h1 className="text-center"> About </h1>
        <p>
          A simple React application using some of the basic feautues of React.This is a non-academic project built in order to understand web application development using React.
        </p>
        <p>
          Tools used for building the application are:
        </p>
        <ul>
          <li>
              <a href="https://facebook.github.io/react/">React</a> - Javascript framework used for build this application.
          </li>
          <li>
            <a href="http://openweathermap.org/">OpenWeatherMap</a> - OpenWeatherMap API used for fetching the current weather data on the basis of city name.
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - Foundation was used for styling the application.
          </li>
        </ul>
      </div>
  )
};

module.exports = About;
