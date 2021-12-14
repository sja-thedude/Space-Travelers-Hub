import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import getMissions from '../../redux/actions/missions';
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
            const { mission_id: id, mission_name: name, description } = mission;

            return (
              <tr key={id}>
                <td>
                  {' '}
                  <h5>{name}</h5>
                </td>
                <td>{description}</td>
                <td>
                  <Button variant="secondary" style={{ textTransform: 'uppercase' }}> Not a member</Button>

                </td>
                <td>
                  <Button variant="outline-success" style={{ textTransform: 'uppercase' }}>join a mission</Button>

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
