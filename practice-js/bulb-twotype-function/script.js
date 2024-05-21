let  bulb = document.getElementById('switchBulbContainer');
let switchButton = document.getElementById('switch');
let statusBulb = document.getElementById('messageContainer');
switchButton.addEventListener('click',() => {
    if(statusBulb.innerHTML === 'OFF'){
        statusBulb.innerHTML = '';
        statusBulb.innerHTML = 'ON';
    }
    else{
        statusBulb.innerHTML = '';
        statusBulb.innerHTML = 'OFF';
    }
    bulb.classList.toggle('not-glowing');//use of toggle very important
});

let disco = document.getElementById('discoBulb');
setInterval(() => {
    disco.classList.toggle('not-glowing');
},1500);// use of setInterval