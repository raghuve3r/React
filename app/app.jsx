import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';
import Main from 'Main';

const history = createBrowserHistory();
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles');
ReactDOM.render(
  <Router history={history}>
    <Main>
      <Route exact path="/" component={Weather}/>
      <Route path="/location/:city" component={Weather} />
      <Route path="/about" component={About}/>
      <Route path="/example" component={Example}/>
    </Main>
  </Router>,
  document.getElementById('app')
);
