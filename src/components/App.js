import React, { Component } from 'react';

import Section from './Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section type="hero" title="hero" />
        <Section type="principle" title="unity-harmony" />
      </div>
    );
  }
}

export default App;
