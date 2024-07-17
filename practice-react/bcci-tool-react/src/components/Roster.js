import React, { useState } from 'react';
 
const Roster = ({ players, onPlayerSelect }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
 
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } 
    else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
 
  const sortedPlayers = sortColumn
    ? [...players].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : players;
 
  return (
    <div>
      <h2>Roster</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('type')}>Type</th>
            <th onClick={() => handleSort('battingSkill')}>Batting</th>
            <th onClick={() => handleSort('bowlingSkill')}>Bowling</th>
            <th onClick={() => handleSort('fieldingSkill')}>Fielding</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
          <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.type}</td>
              <td>{player.battingSkill}</td>
              <td>{player.bowlingSkill}</td>
              <td>{player.fieldingSkill}</td>
              <td>
                <button className="btn btn-primary" onClick={() => onPlayerSelect(player)}>
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Roster;