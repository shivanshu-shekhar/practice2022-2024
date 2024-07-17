import React from 'react';
 
const Selected = ({ players, onPlayerRemove }) => {
  return (
    <div>
      <h2>Selected Players</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.type}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onPlayerRemove(player)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Selected;