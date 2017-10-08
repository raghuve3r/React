import React, { Component } from 'react';
import Nav from 'Nav';

import 'style-loader!css-loader!foundation-sites/dist/css/foundation.css';
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!applicationStyles';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Main;
