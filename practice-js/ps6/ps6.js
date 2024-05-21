//1. & 2. 18 years checker use of propmt,confirm ,alert. 3.use of console.error()
// function ageEntry(){
//     let result = 0;
//     while(1>0){
//         result = Number(prompt('enter age'));
//         if(confirm('do you want to re-enter age')){
//             continue;
//         }
//         else{
//             break;
//         }
//     }
//     return result;
// }
// let age = ageEntry();
// if(age<0){
//     console.error('age cannot be negative');
// }
// console.log(age>=18? alert('you can drive'): alert('you cannot drive'));

//4. 
// let numberEntery = Number(prompt('enter a number'));
// numberEntery > 4 ? location.href = 'https://www.google.com/' : console.log(numberEntery); 
//5.
let backgroundColorEntry = prompt('enter a color');
document.body.style.backgroundColor = backgroundColorEntry;