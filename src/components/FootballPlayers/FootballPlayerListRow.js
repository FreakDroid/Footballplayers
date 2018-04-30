import React from 'react';
import PropTypes from 'prop-types';

//Single component
const FootPlayerListRow = ({ player }) => {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td>{player.nationality}</td>
      <td>{player.age}</td>
    </tr>
  );
};

//Propstypes
FootPlayerListRow.propTypes = {
  player: PropTypes.object.isRequired
};

export default FootPlayerListRow;