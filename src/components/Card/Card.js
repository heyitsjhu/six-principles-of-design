import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card">
        <div className="card__visual">
          <span>temp: svg</span>
        </div>
        <div className="card__content">
          <h3 className="card__title">{this.props.title}</h3>
          <p className="card__description">Lorem ipsum with some greatness. Lorem ipsum with some greatness. Lorem ipsum with some greatness.</p>
        </div>
      </div>
    );
  };
}

export default Card;