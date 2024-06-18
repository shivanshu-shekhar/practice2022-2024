// get
async function fetchData() {
    try {
      const response = await fetch('players.json');
      const data = await response.json();
      console.log(data);// getting all players
      let x = data.find(player => player.userid === 5);
      console.log(x); //finding desired player
    } catch (error) {
      console.log(`Error: ${error}`);
    }
}
fetchData();
//post
// async function addNewPlayer() {
//     try {
//       // Create a new player object
//       const newPlayer = {
//         "userid": 6,
//         "role": "Batsman",
//         "battingskill": "Right-handed",
//         "bowlingskill": "None",
//         "feildingskill": "Slip",
//         "name": "Rohit Sharma"
//       };
  
//       // Send a POST request to add the new player
//       const response = await fetch('players.json', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8'
//         },
//         body: JSON.stringify(newPlayer)
//       });
  
//       //Check if the response was successful
//       // if (!response.ok) {
//         //throw new Error(`Error adding player: ${response.status}`);
//      // }
  
//       // Get the updated list of players from the response
//       const data = await response.json();
//       console.log('New player added:', data);
//     }
//     catch (error) {
//       console.error('Error adding player:', error);
//     }
//   }
//addNewPlayer();