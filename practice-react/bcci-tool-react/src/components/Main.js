import React, { useState, useEffect } from 'react';
import Roster from './Roster';
import Selected from './Selected';
import playersData from '../players.json';
 
const Main = () => {
  const [playersArray, setPlayersArray] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
 
  useEffect(() => {
    // Load players data from the JSON file
    setPlayersArray(playersData);
  }, []);
 
  const handlePlayerSelect = (player) => {
    // Remove the selected player from the playersArray
    setPlayersArray(playersArray.filter((p) => p.name !== player.name));
    // Add the selected player to the selectedPlayers array
    setSelectedPlayers([...selectedPlayers, player]);
  };
 
  const handlePlayerRemove = (player) => {
    // Remove the player from the selectedPlayers array
    setSelectedPlayers(selectedPlayers.filter((p) => p.name !== player.name));
    // Add the player back to the playersArray
    setPlayersArray([...playersArray, player]);
  };
 
  return (
    <div className="container">
      <h1>Cricket Team</h1>
      <div className="row">
        <div className="col-md-6">
          <Roster players={playersArray} onPlayerSelect={handlePlayerSelect} />
        </div>
        <div className="col-md-6">
          <Selected players={selectedPlayers} onPlayerRemove={handlePlayerRemove} />
        </div>
      </div>
    </div>
  );
};
 
export default Main;