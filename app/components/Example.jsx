import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Example = () => {
  return (
    <div>
      <h1 className="text-center page-title"> Example </h1>
      <p>Few locations to try out</p>
      <ol>
        <li><Link to="/?location=Mysore">Mysore, IN</Link></li>
        <li><Link to="/?location=London">London, GB</Link></li>
      </ol>
    </div>
  )
};

export default Example;
