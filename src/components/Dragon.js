import React from 'react';
import PropTypes from 'prop-types';
import Button from './DragonsButton';
import './Dragons.css';

function Dragon({
  id, image, name, description, reserved,
}) {
  return (
    <div className="dragon-card">
      <div className="img-wrapper">
        <img src={image} alt={name} className="dragon-img" />
      </div>
      <div className="dragon-info">
        <h1 className="dragon-name">{name}</h1>
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

Dragon.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Dragon;
