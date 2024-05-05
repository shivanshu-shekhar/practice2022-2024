//1. print the contents of object for
let obj = {
    harry: 98, rohan: 70, aakash: 77
}
let k = Object.keys(obj);
console.log('1.');
for(let i=0; i<k.length; i++){
    console.log(`${k[i]}: ${obj[k[i]]}`);
}
//2. print the contents of object for in
console.log('2.');
for(let i in obj){
    console.log(`${i}: ${obj[i]}`);
}
//3. print try again until user enters correct number
console.log('3.');
let a = '';
while(1>0){
    a = Number(prompt('enter 0','0'));
    if(a=== 0){
        break;
    }
    else{
        console.log('try again')

    }
}
console.log('correct number 0 entered')
//4. function to find mean of 5 numbers
let b = (p,q,r,s,t) => {
    return((p+q+r+s+t)/5)
}
console.log(`4. mean of 1,2,3,4,5 = ${b(1,2,3,4,5)}`);