import React from 'react';
import PropTypes from 'prop-types';

function profileDragons({ name }) {
  return (
    <tr>
      <td className="Title-Entry">{name}</td>
    </tr>
  );
}

profileDragons.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default profileDragons;
