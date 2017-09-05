import React, { Component } from 'react';

const About = () => {
  return (
      <div>
        <h1 className="text-center page-title"> About </h1>
        <p>
          A simple React application using some of the basic feautues of React.This is a non-academic project built in order to understand web application development using React.
        </p>
        <p>
          Tools used for building the application are:
        </p>
        <ul>
          <li>
              <a href="https://facebook.github.io/react/" className="link-color">React</a> - Javascript framework used for build this application.
          </li>
          <li>
            <a href="http://openweathermap.org/" className="link-color">OpenWeatherMap</a> - OpenWeatherMap API used for fetching the current weather data on the basis of city name.
          </li>
          <li>
            <a href="http://foundation.zurb.com/" className="link-color">Foundation</a> - Foundation was used for styling the application.
          </li>
        </ul>
      </div>
  )
};

export default About;
