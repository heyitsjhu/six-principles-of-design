import React, { Component } from 'react';

import PRINCIPLESLIST from '../../data/data-principles';

import Card from '../Card/Card';

class PrincipleSection extends Component {
  principleExamples = PRINCIPLESLIST[this.props.title]["principles"];

  renderPrincipleExamples() {
    return this.principleExamples.map(example => <Card title={example.name} key={example.name} />);
  }

  renderPrincipleSection() {
    return(
      <div className={this.props.title + "-section"}>
        <h2 className="section__title">
          { PRINCIPLESLIST[this.props.title]["displayName"] }
        </h2>
        <div className="cards-container">
          { this.renderPrincipleExamples() }
        </div>
      </div>
    );
  }

  render() {
    return this.renderPrincipleSection();
  };

}

export default PrincipleSection;