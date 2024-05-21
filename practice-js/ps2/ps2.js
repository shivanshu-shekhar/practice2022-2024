//1 logical opreator to see wether age of person between 10 and 20
let age = 15;
console.log('1.');console.log((age>10 && age< 20)|| age=== 10 || age===20);
//2 switch case statement use
let dayNumber = 6;
console.log('2.');
switch (dayNumber){
    case 1: 
        console.log('monday');
        break;
    case 2: 
        console.log('tuesday');
        break;
    case 3: 
        console.log('wednesday');
        break;
    case 4: 
        console.log('thursday');
        break;
    case 5: 
        console.log('friday');
        break;
    case 6: 
        console.log('saturday');
        break;
    case 7: 
        console.log('sunday');
        break;
    default:
        console.log('wrong input');
}
//3. js program to see wether a number is divisible with 2 and 3
let a = 6;
let result = (a%2=== 0 && a%3=== 0)? 'yes':'no';
console.log('3.'+result);
//4. js program to see wether a number is divisible with 2 or 3
a = 4;
result = (a%2=== 0 || a%3=== 0)? 'yes':'no';
console.log('4.'+result);
//6. 
a = 13;
result = (a>= 18)? 'You can drive':'You Cannot drive';
console.log('5.'+result);