//1 & 2 sum of all the numbers in array from user until 0
var c = [];
var sum = 0;
function numberChecker(a){
    if(a===''){
        alert('Please enter Number');
        return false;
    }// check for no entry''
    let d = Number(a);
    if(d === 0){
        return true;
    }//check to stop entry
    else{
        let b = 0;
        for(let i = 0; i< a.length; i++){
            if(a.charCodeAt(i)>=48 && a.charCodeAt(i)<= 57 ){
                continue;
            }
            else{
                b=1;
                break;
            }
        }
        if(b===0){
            c.push(d);
            sum+= d;
        }
        else{
            alert('Please enter Number');
        }//check wether number or not number
        return false;
    }
}
let x;
while(1>0){
    x= numberChecker(prompt('Enter a Number enter 0 to to finsh entry'));
    if(x === true){
        alert(`1. & 2. entery in array complete sum of all number from array ${c} = ${sum}`);
        break;
    }
    else{
        continue;
    }
}

//3. filter for numbers in given array that are divisible by 10
function tenDivisibleChecker(a){
    return (a%10 === 0);
}
let d = [1,2,40,5,9,20,100,60,49,56,77];
let e = d.filter(tenDivisibleChecker)
console.log(`3. for array [${d}] filterd array divisible by 10 is [${e}]`);
//4. make array have square rather then original number
e = e.map(x => {
    return (x**2);
})
console.log(`4. ${e}`);
//5. use reduce for finding factorial of n natural numbers array.
let y = Number(prompt('enter a number to make n natural number array'));
i=1;
e=[];
while(i<=y){
    e.push(i);
    i++;
}
function factorial(a,b){
    return a*b;
}
console.log(`5. ${e.reduce(factorial)}`);