import React, { Component } from 'react';

import Proximity from '../Principles/Proximity';
import Similarity from '../Principles/Similarity';
import Continuation from '../Principles/Continuation';
import Repetition from '../Principles/Repetition';
import Rhythm from '../Principles/Rhythm';

class Card extends Component {

  renderSVG() {
    switch (this.props.title) {
    case 'Proximity':
      return <Proximity />;
    case 'Similarity':
      return <Similarity />;
    case 'Continuation':
      return <Continuation />;
    case 'Repetition':
      return <Repetition />;
    case 'Rhythm':
      return <Rhythm />;
    default:
      return <span>Nothing here yet</span>;
    }
  }

  render() {
    return(
      <div className="card">
        <div className="card__visual">
          {this.renderSVG()}
        </div>
        <div className="card__content">
          <h3 className="card__title">{this.props.title}</h3>
          <p className="card__description">{this.props.description}</p>
        </div>
      </div>
    );
  };
}

export default Card;