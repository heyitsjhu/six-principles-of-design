import React, { Component } from 'react';

import LogoPartA from './_LogoPartA';
import LogoPartB from './_LogoPartB';
import LogoPartC from './_LogoPartC';

class Logo extends Component {
  render() {
    return (
      <h1 className="main-title">
        <LogoPartA />
        <LogoPartB />
        <LogoPartC />
      </h1>
    );
  };

}

export default Logo;