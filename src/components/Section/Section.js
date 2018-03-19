import React, { Component } from 'react';

import HeroSection from './_HeroSection';
import PrincipleSection from './_PrincipleSection';

class Section extends Component {

  renderSection() {
    switch (this.props.type) {
      case 'hero':
        return (<HeroSection />);
      case 'principle':
        return (<PrincipleSection title={this.props.title} />);
      default:
        return (<div></div>);
    }
  }

  render() {
    return(
      <section id={this.props.title + "-section"} className={"section " + this.props.type + "-section"}>
        { this.renderSection() }
      </section>
    );
  };

}

export default Section;