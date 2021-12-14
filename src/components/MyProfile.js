import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRockets from './ProfileRockets';
import ProfileDragons from './ProfileDragons';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const dragons = useSelector((state) => state.dragons);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  const renderReservedRockets = reservedRockets.map((rocket) => (
    <ProfileRockets
      key={rocket.id}
      name={rocket.name}
    />
  ));

  const renderReservedDragons = reservedDragons.map((dragon) => (
    <ProfileDragons
      key={dragon.id}
      name={dragon.name}
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
      <div className="Box">
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReservedDragons}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
