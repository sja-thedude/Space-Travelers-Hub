import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservations } from '../redux/actions/dragons';
import './Dragons.css';

function Button({ id, reserved }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const booking = e.target.className;

    if (booking === 'not-reserved') {
      dispatch(reserveDragon(id));
    } else if (booking === 'reserved') {
      dispatch(cancelReservations(id));
    }
  };

  return (
    <>
      {
        reserved
          ? <button id={id} type="button" className="reserved" onClick={handleClick}>Cancel Reservations</button>
          : <button id={id} type="button" className="not-reserved" onClick={handleClick}>Reserve Dragon</button>
      }
    </>
  );
}

Button.propTypes = {
  id: PropTypes.number,
  reserved: PropTypes.bool,
}.isRequired;

export default Button;
