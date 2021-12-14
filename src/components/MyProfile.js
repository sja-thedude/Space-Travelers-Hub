import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRockets from './ProfileRockets';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const renderReservedRockets = reservedRockets.map((rocket) => (
    <ProfileRockets
      key={rocket.id}
      name={rocket.name}
    />
  ));

  return (
    <div className="result">
      <div className="Box">
        <h2 className="title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReservedRockets}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
