import React from 'react';
import FootballPlayerListRow from './FootballPlayerListRow';
import PropTypes from 'prop-types';

const FootballPlayerList = ({ footballPlayers }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          footballPlayers.map((player, i) =>
            <FootballPlayerListRow key={i++} player={player} />)
        }
      </tbody>
    </table>
  );
};

FootballPlayerList.propTypes = {
  footballPlayers: PropTypes.array.isRequired
};

export default FootballPlayerList;