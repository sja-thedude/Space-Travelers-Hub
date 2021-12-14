import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import getMissions, { missionReservation } from '../../redux/actions/missions';

import './Missions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Missions = () => {
  const dispatch = useDispatch();
  const fetchedMissions = useSelector((state) => state.missions);
  useEffect(() => {
    if (!fetchedMissions.length) {
      dispatch(getMissions());
    }
  }, []);

  const reservationHandler = (e) => {
    const payload = { mission: fetchedMissions, id: e.target.id };
    dispatch(missionReservation(payload));
  };

  return (
    <div className="table-cont">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {fetchedMissions.map((mission) => {
            const {
              mission_id: id, mission_name: name, description, reserved,
            } = mission;
            return (
              <tr key={id}>
                <td>
                  {' '}
                  <h5>{name}</h5>
                </td>
                <td>{description}</td>
                <td>
                  <Button variant={reserved ? 'primary' : 'secondary'} size="sm" style={{ textTransform: 'uppercase' }}>
                    {reserved ? 'active member' : 'not a member'}
                    {' '}
                  </Button>

                </td>
                <td>
                  <Button variant={reserved ? 'outline-danger' : 'outline-success'} onClick={reservationHandler} id={id} style={{ textTransform: 'uppercase' }}>
                    {reserved ? 'Leave Mission' : 'Join Mission'}
                    {' '}
                  </Button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
