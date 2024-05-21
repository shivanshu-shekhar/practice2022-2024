// let buttonContainer = document.getElementById('buttonContainer');
// const dialogContainer = document.createElement('div');
// dialogContainer.id = 'dialog-container';
// dialogContainer.style.position = 'fixed';
// dialogContainer.style.top = '50%';
// dialogContainer.style.left = '50%';
// dialogContainer.style.transform = 'translate(-50%, -50%)';
// dialogContainer.style.backgroundColor = 'white';
// dialogContainer.style.border = '1px solid black';
// dialogContainer.style.padding = '20px';
// dialogContainer.style.boxSizing = 'border-box';
// dialogContainer.style.zIndex = '1000';
// dialogContainer.style.display = 'none';

// // Create the dialog content
// const dialogContent = document.createElement('div');
// dialogContent.id = 'dialog-content';
// dialogContainer.appendChild(dialogContent);

// // Create the dialog checkbox
// const dialogCheckbox = document.createElement('div');
// dialogCheckbox.id = 'dialog-checkbox';
// dialogContainer.appendChild(dialogCheckbox);

// const dialogPrevent = document.createElement('input');
// dialogPrevent.type = 'checkbox';
// dialogPrevent.id = 'dialog-prevent';
// dialogCheckbox.appendChild(dialogPrevent);

// const dialogPreventLabel = document.createElement('label');
// dialogPreventLabel.htmlFor = 'dialog-prevent';
// dialogPreventLabel.textContent = 'Prevent this page from creating additional dialogs';
// dialogCheckbox.appendChild(dialogPreventLabel);

// // Create the dialog buttons
// const dialogButtons = document.createElement('div');
// dialogButtons.id = 'dialog-buttons';
// dialogContainer.appendChild(dialogButtons);

// const dialogOk = document.createElement('button');
// dialogOk.id = 'dialog-ok';
// dialogOk.textContent = 'OK';
// dialogButtons.appendChild(dialogOk);

// // Add the dialog container to the page
// document.body.appendChild(dialogContainer);

// // Create the showDialog function
// function showDialog(html, prevent) {
//   dialogContent.innerHTML = html;
//   dialogCheckbox.style.display = prevent ? 'block' : 'none';
//   //dialogPrevent.checked = prevent;
//   dialogContainer.style.display = 'block';
//   dialogOk.addEventListener('click', () => {
//     dialogPrevent.checked = false;
//     dialogContainer.style.display = 'none';
//   });
// }

// for(let i = 2 ; i <=20 ; i++){
//     let button = document.createElement('button');
//     button.className = 'btn btn-success';
//     button.textContent = `Button#${i}`;
//     button.id = `${i}`;
//     buttonContainer.appendChild(button);
//     button.addEventListener('click',() =>{
//         showDialog(`<div>${i}<div>`, true);
//     });
// }
// document.getElementById('buttonContainer').firstElementChild
// .addEventListener('click', () => {showDialog(`<div>1<div>`, false);});

// best way one cannot style elements created in js using cssfile

let buttonContainer = document.getElementById('buttonContainer');
const dialogContainer = document.createElement('div');
dialogContainer.id = 'dialog-container';
dialogContainer.style.position = 'fixed';
dialogContainer.style.top = '50%';
dialogContainer.style.left = '50%';
dialogContainer.style.transform = 'translate(-50%, -50%)';
dialogContainer.style.backgroundColor = 'white';
dialogContainer.style.border = '1px solid black';
dialogContainer.style.padding = '20px';
dialogContainer.style.boxSizing = 'border-box';
dialogContainer.style.zIndex = '1000';
dialogContainer.style.display = 'none';
document.body.appendChild(dialogContainer);
dialogContainer.innerHTML = `<div id="numberContainer"></div>
<div id="messageContainer"></div>
<div id="okbuttonContainer"><button id="okButton">ok</button></div>`;
function showDialog(x){
  dialogContainer.style.display = 'block';
  document.getElementById('buttonContainer').firstElementChild.disabled = true;
  for(let i = 2 ; i <=20 ; i++){
    document.getElementById(i).disabled = true;
  }
  let numberContainer = document.getElementById('numberContainer');
  let messageContainer = document.getElementById('messageContainer');
  let okButton = document.getElementById('okButton');
  okButton.addEventListener('click',() =>{
    dialogContainer.style.display = 'none';
    document.getElementById('buttonContainer').firstElementChild.disabled = false;
    for(let i = 2 ; i <=20 ; i++){
      document.getElementById(i).disabled = false;
    }
  });
  numberContainer.innerHTML ='';
  messageContainer.innerHTML = '';
  if(x===1){
    numberContainer.innerHTML = `${x}`;
  }
  else{
    numberContainer.innerHTML = `${x}`;
    messageContainer.innerHTML = `<input type="checkbox" id="checkBox">
    <label for="checkBox">Prevent this page from creating additional dialogs</label>`;
  }
}
document.getElementById('buttonContainer').firstElementChild
.addEventListener('click', () => {showDialog(1);});
for(let i = 2 ; i <=20 ; i++){
    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.textContent = `Button#${i}`;
    button.id = `${i}`;
    buttonContainer.appendChild(button);
    button.addEventListener('click',() =>{
        showDialog(i);
    });
}