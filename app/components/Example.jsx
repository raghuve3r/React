var React = require('react');
var {NavLink} = require('react-router-dom');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center"> Example </h1>
      <p>Few locations to try out</p>
      <ol>
        <li><NavLink to="/?location=Mysore">Mysore, IN</NavLink></li>
        <li><NavLink to="/?location=London">London, UK</NavLink></li>
      </ol>
    </div>
  )
};

module.exports = Example;
