var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = () => {
  return (
    <div>
      <h2> Nav component </h2>
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</NavLink>
    </div>
  )
};

module.exports = Nav;
