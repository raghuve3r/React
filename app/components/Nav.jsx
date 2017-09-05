import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Nav extends Component{
  onSearch = (e) => {
    e.preventDefault();
    const location = this.refs.search.value;
    const encodedLocation = encodeURIComponent(location);
    if(location.length > 0){
      this.refs.search.value = '';
      history.push('/?location='+encodedLocation);
    }
  };

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <NavLink exact to="/" className="menu-text">Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
