function showTime() {
	let x = new Date();
	let time = `${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`;
	document.getElementById('currentTime').innerHTML = time
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
//digital clock 
function hackerMan(){
    let p1 = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        let y = 'Intializing Hack program...';
        //document.getElementById('hackContainer').innerHTML +=`<div>${y}</div>`;
        resolve(y);
      }, 1000);
    })
    p1.then((value)=>{
      document.getElementById('hackContainer').innerHTML +=`<div>${value}</div>`;
      return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
          let y = 'Hacking ashish17 username...';
          resolve(y);
        }, 1000);})
    }).then((value)=>{
      document.getElementById('hackContainer').innerHTML +=`<div>${value}</div>`;
      return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        let y = 'Username ashish17 found...';
        resolve(y)
      }, 1000);})
    }).then((value)=>{
      document.getElementById('hackContainer').innerHTML +=`<div>${value}</div>`;
      return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        let y = 'Connecting to facebook...';
        resolve(y);
      }, 1000);})
    }).then((value)=>{
      document.getElementById('hackContainer').innerHTML +=`<div>${value}</div>`;
    })
}
hackerMan();
//promise chaining using .then for synchronus flow of executions
const outputDiv = document.getElementById('output');

async function executePromises() {
    try {
        // Create three promises
        let promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise 1 resolved!');
            }, 5000);
        });

        let result1 = await promise1;
        outputDiv.innerHTML += `<p>${result1}</p>`;

        let promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise 2 resolved!');
            }, 2000);
        });

        let result2 = await promise2;
        outputDiv.innerHTML += `<p>${result2}</p>`;

        let promise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise 3 resolved!');
            }, 3000);
        });

        let result3 = await promise3;
        outputDiv.innerHTML += `<p>${result3}</p>`;
    } catch (error) {
        console.error(error);
    }
}
executePromises();
//promise chaining using .then for synchronus flow of executions using async await try catch
