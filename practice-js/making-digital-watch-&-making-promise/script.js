//making a digital clock
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
let label = document.createElement("label");
label.setAttribute("for", "age");
label.textContent = "Enter your age:";

let input = document.createElement("input");
input.type = "number";
input.id = "age";
input.name = "age";
input.min = 1;
input.max = 150;
input.required = true;

document.body.appendChild(label);
document.body.appendChild(input);
let submit = document.createElement("button");
submit.textContent = 'submit';
document.body.appendChild(submit);
//writing a promise
submit.addEventListener("click", () =>{
  let p = new Promise((resolve,reject)=>{
    if (input.value >= 18){resolve(true);}
    else{reject(new Error('underage error'));}
  })
  p.then((value)=>{setTimeout(()=>{alert(`${value} you can drive`)},2000);},
  (error)=>{setTimeout(()=>{alert(`you cannot drive ${error}`)},2000);}
  )
//   if (input.value >= 18){
//   setTimeout(alert('you can drive'),2000);
// }
// else{
//   setTimeout(alert('you cannot drive'),2000);
// }
})