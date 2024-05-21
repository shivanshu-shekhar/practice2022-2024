// 1. string variable + number
let a = 'hello'
let b = 1; 
console.log('1a.'+a+b);
a = '3';
console.log('1b.'+a+b);
//2. type of
console.log('2.'+typeof(a));
//3. const object
const obj = {
    name : 'shiv',
    age: 24
}
// obj =5;console.log(obj); not allowed
//4. adding and overiding
console.log('4.');console.log(obj);
obj.title = 'shekhar';
console.log('4a.');console.log(obj);
obj.title = 'singh';
console.log('4b.');console.log(obj);
//5. word dictionary
let dictionary = {
    gun : 'firearm',
    assault : 'attack',
    prone : 'flat on belly firing',
    crouch : 'on one knee firing',
    fireInTheHole : 'throw grenade'
}
console.log('5.');console.log(dictionary);