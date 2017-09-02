var React = require('react');
var ReactDOM = require('react-dom');
var {Route, BrowserRouter} = require('react-router-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

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
