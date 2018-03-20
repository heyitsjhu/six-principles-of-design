import React, { Component } from 'react';
import PRINCIPLESLIST from '../data/data-principles';
import Section from './Section/Section';

class App extends Component {
  SECTIONS = Object.keys(PRINCIPLESLIST);

  renderPrincipleSections() {
    return this.SECTIONS.map((section) => {
      return <Section type="principle" title={section} key={"principle" + section} />
    });
  }

  render() {
    return (
      <div className="App">
        <Section type="hero" title="hero" />
        { this.renderPrincipleSections() }
      </div>
    );
  }
}

export default App;
