let buttonContainer = document.getElementById('buttonContainer');
buttonContainer.firstElementChild.addEventListener('click',()=>{alert('1')});
for(let i = 2 ; i <=20 ; i++){
    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.textContent = `Button#${i}`;
    button.id = `${i}`;
    buttonContainer.appendChild(button);
    button.addEventListener('click',()=>{alert(`${i}\n⬜prevent`)});
}