const dateElement = document.getElementById("date-time");

function updateDate() {
  const d = new Date();
  let text = d.toUTCString();
  dateElement.textContent = text;
}

// Update the date every second
setInterval(updateDate, 1000);

// Call the updateDate function once at the start to display the current date and time
updateDate();

//ps-9
//1
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const body = document.body;
        body.innerHTML += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>`
        resolve('script 1 loaded');
    },2000)
})
p1.then((value)=>{
    alert(value);
})

//2
async function loadScript(){
    let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        body = document.body;
        body.innerHTML += `<script>console.log('Hello, World!');</script>`;
        resolve('script 2 loaded')
    },2000)
    })
    try{
        let x = await p2;
        // alert(x);
        console.log(x);
    }
    catch(error){
        console.log(error)
    }
}
loadScript();

//3
async function rejector (){
    let p3 = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject('promise rejected')
        },3000)
    })
    try{
        let x = await p3
        console.log('promise resolved');
    }
    catch(errror){
        console.log(errror);
    }
}
rejector();

//4
async function makePromises() {
    try {
      const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 1 resolved!");
        }, 2000);
      });
  
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 2 resolved!");
        }, 3000);
      });
  
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 3 resolved!");
        }, 1000);
      });

    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
    } catch (error) {
      console.error(error);
    }
  }
  
  makePromises();
  const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved!");
    }, 2000);
  });

  const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved!");
    }, 3000);
  });

  const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved!");
    }, 1000);
  });
  P1.then((value)=>{
    console.log(value)
  })
  P2.then((value)=>{
    console.log(value)
  })
  P3.then((value)=>{
    console.log(value)
  })
