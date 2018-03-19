import React, { Component } from 'react';

import Card from '../Card/Card';

class PrincipleSection extends Component {

  render() {
    return(
      <div className={this.props.title + "-section"}>
        <h2 className="section__title">{this.props.title}</h2>
        <div className="cards-container">
          <Card title="proximity" />
          <Card title="similarity" />
          <Card title="continuation" />
          <Card title="repetition" />
          <Card title="rhythm" />
        </div>
      </div>
    );
  };

}

export default PrincipleSection;