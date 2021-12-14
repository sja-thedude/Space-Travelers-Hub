import React from 'react';
import PropTypes from 'prop-types';

function profileRockets({ name }) {
  return (
    <tr>
      <td className="Title-Entry">{name}</td>
    </tr>
  );
}

profileRockets.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default profileRockets;
