import PropTypes from 'prop-types';

const ReserveMission = (props) => {
  const { name } = props;

  return (
    <tr>
      <td className="Title-Entry">{name}</td>
    </tr>
  );
};

ReserveMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReserveMission;
