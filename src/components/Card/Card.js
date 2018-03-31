import React, { Component } from 'react';

import Proximity from '../Principles/Proximity';
import Similarity from '../Principles/Similarity';
import Continuation from '../Principles/Continuation';
import Repetition from '../Principles/Repetition';
import Rhythm from '../Principles/Rhythm';

import Symmetry from '../Principles/Symmetry';
import Asymmetry from '../Principles/Asymmetry';
import Radial from '../Principles/Radial';

import Trees from '../Principles/Trees';
import Nests from '../Principles/Nests';
import Weight from '../Principles/Weight';

import SizeRelation from '../Principles/SizeRelation';
import Ratio from '../Principles/Ratio';
import Divisions from '../Principles/Divisions';

import Highlight from '../Principles/Highlight';
import Colour from '../Principles/Colour';
import SizeFocus from '../Principles/SizeFocus';

import LightDark from '../Principles/LightDark';
import Line from '../Principles/Line';

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
    case 'Symmetry':
      return <Symmetry />;
    case 'Asymmetry':
      return <Asymmetry />;
    case 'Radial':
      return <Radial />;
    case 'Trees':
      return <Trees />;
    case 'Nests':
      return <Nests />;
    case 'Weight':
      return <Weight />;
    case 'Size':
      return this.props.parent === 'scale-proportion' ? <SizeRelation /> : <SizeFocus />;
    case 'Ratio':
      return <Ratio />;
    case 'Divisions':
      return <Divisions />;
    case 'Highlight':
      return <Highlight />;
    case 'Colour':
      return <Colour />;
    case 'Light & Dark':
      return <LightDark />;
    case 'Line':
      return <Line />;
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