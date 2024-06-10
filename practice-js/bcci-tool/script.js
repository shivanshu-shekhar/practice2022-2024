let selectedPlayers=[];
let playersArray = [];
let sortDirection = {
    name: 1,
    type: 1,
    battingSkill: 1,
    bowlingSkill: 1,
    fieldingSkill: 1
};  
//fetching json file data,converting the json to normal form ,putting the data in another array
fetch('players.json')
  .then(response => response.json())
  .then(data => {
    if (data) {
      playersArray = data.map(player => ({
        name: player.name,
        type: player.type,
        battingSkill: player.battingSkill,
        bowlingSkill: player.bowlingSkill,
        fieldingSkill: player.fieldingSkill
      }));

      const tableHead = `
        <table style="border: 1px solid black;">
          <thead>
            <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; cursor: pointer;" onclick="sortTable('name')">Name</th>
            <th style="border: 1px solid black; cursor: pointer;" onclick="sortTable('type')">Role</th>
            <th style="border: 1px solid black; cursor: pointer;" onclick="sortTable('battingSkill')">Bat</th>
            <th style="border: 1px solid black; cursor: pointer;" onclick="sortTable('bowlingSkill')">Bowl</th>
            <th style="border: 1px solid black; cursor: pointer;" onclick="sortTable('fieldingSkill')">Field</th>
            <th style="border: 1px solid black;">Action</th>
            </tr>
          </thead>
          <tbody id="table-body">
          </tbody>
        </table>
      `;
      document.querySelector('.child:first-child').innerHTML = tableHead;

      // Create the table rows in the first child div
      playersArray.forEach(player => {
        const tableRow = `
          <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">${player.name}</td>
            <td style="border: 1px solid black;">${player.type}</td>
            <td style="border: 1px solid black;">${player.battingSkill}</td>
            <td style="border: 1px solid black;">${player.bowlingSkill}</td>
            <td style="border: 1px solid black;">${player.fieldingSkill}</td>
            <td style="border: 1px solid black;"><button onclick="selectPlayer('${player.name}','${player.type}')">Select</button></td>
          </tr>
        `;
        document.querySelector('#table-body').innerHTML += tableRow;
      });

      const tableHead2 = `
        <table style="border: 1px solid black;">
          <thead>
            <tr>
              <th style="border: 1px solid black;">Name</th>
              <th style="border: 1px solid black;">Role</th>
              <th style="border: 1px solid black;">Action</th>
            </tr>
          </thead>
          <tbody id="table-body-2">
          </tbody>
        </table>
      `;
      document.querySelector('.child:last-child').innerHTML = tableHead2;
    }
  })
.catch(error => console.error('Error fetching the JSON file:', error));

function sortTable(column) {
    playersArray.sort((a, b) => {
      if (a[column] < b[column]) {
        return -sortDirection[column];
      } else if (a[column] > b[column]) {
        return sortDirection[column];
      } else {
        return 0;
      }
    });
  
    sortDirection[column] *= -1;
  
    const tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = '';
    playersArray.forEach(player => {
      const tableRow = `
        <tr style="border: 1px solid black;">
          <td style="border: 1px solid black;">${player.name}</td>
          <td style="border: 1px solid black;">${player.type}</td>
          <td style="border: 1px solid black;">${player.battingSkill}</td>
          <td style="border: 1px solid black;">${player.bowlingSkill}</td>
          <td style="border: 1px solid black;">${player.fieldingSkill}</td>
          <td style="border: 1px solid black;"><button onclick="selectPlayer('${player.name}','${player.type}')">Select</button></td>
        </tr>
      `;
      tableBody.innerHTML += tableRow;
    });
  }

function selectPlayer(name,type) {
    const index = playersArray.findIndex(player => player.name === name);
    if (index!== -1) {
        const player = playersArray.splice(index, 1)[0];
        selectedPlayers.push(player);
        const tableBody = document.querySelector('#table-body');
        tableBody.innerHTML = '';
        playersArray.forEach(player => {
        const tableRow = `
          <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">${player.name}</td>
            <td style="border: 1px solid black;">${player.type}</td>
            <td style="border: 1px solid black;">${player.battingSkill}</td>
            <td style="border: 1px solid black;">${player.bowlingSkill}</td>
            <td style="border: 1px solid black;">${player.fieldingSkill}</td>
            <td style="border: 1px solid black;"><button onclick="selectPlayer('${player.name}','${player.type}')">Select</button></td>
          </tr>
        `;
        tableBody.innerHTML += tableRow;
      });
  
      const tableBody2 = document.querySelector('#table-body-2');
      const tableRow2 = `
        <tr style="border: 1px solid black;">
          <td style="border: 1px solid black;">${name}</td>
          <td style="border: 1px solid black;">${type}</td>
          <td style="border: 1px solid black;"><button onclick="removePlayer('${name}')">Remove</button></td>
        </tr>
      `;
      tableBody2.innerHTML += tableRow2;
    }
}

function removePlayer(name) {
    const index = selectedPlayers.findIndex(player => player.name === name);
    if (index!== -1) {
      const player = selectedPlayers.splice(index, 1)[0];
      playersArray.push(player);
      const tableBody2 = document.querySelector('#table-body-2');
        tableBody2.innerHTML='';
        selectedPlayers.forEach(player => {
            const tableRow2 = `
          <tr style="border: 1px solid black;">
          <td style="border: 1px solid black;">${player.name}</td>
          <td style="border: 1px solid black;">${player.type}</td>
          <td style="border: 1px solid black;"><button onclick="removePlayer('${player.name}')">Remove</button></td>
        </tr>
      `;
      tableBody2.innerHTML += tableRow2;
        })
      const tableBody = document.querySelector('#table-body');
      const tableRow = `
        <tr style="border: 1px solid black;">
          <td style="border: 1px solid black;">${name}</td>
          <td style="border: 1px solid black;">${player.type}</td>
          <td style="border: 1px solid black;">${player.battingSkill}</td>
          <td style="border: 1px solid black;">${player.bowlingSkill}</td>
          <td style="border: 1px solid black;">${player.fieldingSkill}</td>
          <td style="border: 1px solid black;"><button onclick="selectPlayer('${name}','${player.type}')">Select</button></td>
        </tr>
      `;
      tableBody.innerHTML += tableRow;
    }
  }
