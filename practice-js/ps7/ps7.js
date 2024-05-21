//1 first element of navbar color change
let x = document.querySelector('.container-fluid');
x.firstElementChild.style.color = 'red';
// let b = prompt('enter a number');
// //console.log(b.length-1);
// let j = 0; let flag = true;
// for(let i = b.length-1; i >= 0; i-- ,j++){
//     //console.log(b.charAt(i));
//     //console.log(b.charAt(j));
//     if(b.charAt(i) === b.charAt(j)){
//         continue;
//     }
//     else{
//         flag = false;
//         break;
//     }
// }
// if(flag){
//     console.log(`${b} is pallindrome`);
// }
// else{
//     console.log(`${b} is not pallindrome`);
// }
// // if(d === b){
// //     console.log(`${b} is pallindrome`);
// // }
// // else{
// //     console.log(`${b} is not pallindrome`);
// // }
//2 tBodies when no tbody tag
let a = document.getElementById('myTable').tBodies.length;
console.log(a);
//3 chidren selection
let parent = document.getElementById('parentDiv');
parent.firstElementChild.style.color = 'red';
parent.lastElementChild.style.color = 'red';
//4 changing back grounds of li
let c = document.querySelectorAll('.der');
for(let i = 0; i<c.length; i++){
    c[i].style.backgroundColor = 'cyan';
}
//c.style.backgroundColor = 'cyan'