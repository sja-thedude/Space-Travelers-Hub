import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';
import './Rockets.css';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div className="roc-card">
      <div className="img-wrapper">
        <img src={image} alt={name} className="roc-img" />
      </div>
      <div className="roc-info">
        <h1 className="roc-name">{name}</h1>
        <p className="desc">
          {
            reserved
              ? <span className="badge">Reserved</span>
              : ''
          }
          {description}
        </p>
        <Button id={id} reserved={reserved} />
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
