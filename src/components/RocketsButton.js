import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/actions/rockets';
import './Rockets.css';

function Button({ id, reserved }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const booking = e.target.className;

    if (booking === 'not-reserved') {
      dispatch(reserveRocket(id));
    } else if (booking === 'reserved') {
      dispatch(cancelReservation(id));
    }
  };

  return (
    <>
      {
        reserved
          ? <button id={id} type="button" className="reserved" onClick={handleClick}>Cancel Reservation</button>
          : <button id={id} type="button" className="not-reserved" onClick={handleClick}>Reserve Rocket</button>
      }
    </>
  );
}

Button.propTypes = {
  id: PropTypes.number,
  reserved: PropTypes.bool,
}.isRequired;

export default Button;
