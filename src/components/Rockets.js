import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../redux/actions/rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            image={rocket.image[0]}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </>
  );
}

export default Rockets;
