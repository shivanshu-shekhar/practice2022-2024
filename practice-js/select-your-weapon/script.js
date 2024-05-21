// var i = 0;
// document.getElementById('prev').addEventListener('click',() => {
//     if(i === 0){
//         i = 2;
//     }
//     else{
//         i = i-1;
//     }
//     if(i === 1){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar300blkout.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar15 in 300 black out';
//     }
//     else if(i === 2){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar338lapuamagnum.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar15 in 338 lapua magnum';
//     }
//     else if(i === 0){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar10.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar10';
//     }
// });
// document.getElementById('next').addEventListener('click',() => {
//     if(i === 2){
//         i = 0;
//     }
//     else{
//         i = i+1;
//     }
//     if(i === 1){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar300blkout.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar15 in 300 black out';
//     }
//     else if(i === 2){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar338lapuamagnum.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar15 in 338 lapua magnum';
//     }
//     else if(i === 0){
//         document.getElementById('container').innerHTML  = '';
//         document.getElementById('container').innerHTML  = `<img id="weaponImage" 
//             src="./asset/ar10.jpg">`;
//         document.getElementById('weaponName').innerHTML  = 'ar10';
//     }
// }); my code it works
let currentIndex = 0;
const weapons = [
  {
    image: './asset/ar10.jpg',
    name: 'ar10'
  },
  {
    image: './asset/ar300blkout.jpg',
    name: 'ar15 in 300 black out'
  },
  {
    image: './asset/ar338lapuamagnum.jpg',
    name: 'ar15 in 338 lapua magnum'
  }
];

document.getElementById('prev').addEventListener('click', () => {
  //currentIndex = (currentIndex - 1 + weapons.length) % weapons.length;
    if(currentIndex === 0){
        currentIndex = 2;
    }
    else{
        currentIndex--;
    }
    updateWeaponDisplay();
});

document.getElementById('next').addEventListener('click', () => {
  //currentIndex = (currentIndex + 1) % weapons.length;
    if(currentIndex === 2){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    updateWeaponDisplay();
});

function updateWeaponDisplay() {
  const weapon = weapons[currentIndex];
  document.getElementById('container').innerHTML = `<img id="weaponImage" src="${weapon.image}">`;
  document.getElementById('weaponName').innerHTML = weapon.name;
}
// ai code way better very short also.