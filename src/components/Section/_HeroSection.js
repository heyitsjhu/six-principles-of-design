import React, { Component } from 'react';

import Logo from '../Logo/Logo';

class HeroSection extends Component {

  description = "Principles applied to the elements of design that bring them together into one design. How one applies these principles determines how successful a design may be.";

  render() {
    return(
      <div className="hero-section">
        <Logo />
      </div>
    );
  };

}

export default HeroSection;