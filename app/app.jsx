var React = require('react');
var ReactDOM = require('react-dom');
var {Route, BrowserRouter} = require('react-router-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

//App css
require('style-loader!css-loader!applicationStyles')


ReactDOM.render(
  <BrowserRouter>
    <Main>
      <Route exact path="/" component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/example" component={Example}/>
    </Main>
  </BrowserRouter>,
  document.getElementById('app')
);
