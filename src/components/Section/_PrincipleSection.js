import React, { Component } from 'react';

import PRINCIPLESLIST from '../../data/data-principles';

import Card from '../Card/Card';

class PrincipleSection extends Component {
  principleExamples = PRINCIPLESLIST[this.props.title]["principles"];

  renderPrincipleExamples() {
    return this.principleExamples.map((example) => {
      return <Card title={example.name} description={example.description} key={example.name} parent={this.props.title} />;
    });
  }

  renderPrincipleSection() {
    return(
      <div className="section-container">
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