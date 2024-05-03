//1 sum of all the numbers in array from user 
var c = [0];
var sum = 0;
function numberChecker(a){
    let d = a.toLowerCase();
    if(d === 'ok'){
        return true;
    }
    else{
        let b = 0;
        for(let i = 0; i< d.length; i++){
            if(d.charCodeAt(i)>=48 && d.charCodeAt(i)<= 57 ){
                    continue;
            }
            else{
                b=1;
                break;
            }
        }
        if(b===0){
            c.push(Number(a));
            sum+= Number(a);
        }
        else{
            alert('Please enter Number');
        }
        return false;
    }
}
let x;
while(1>0){
    x= numberChecker(prompt('Enter a Number enter ok to to finsh entry'));
    if(x === true){
        c.shift();
        alert(`entery in array complete sum of all number from array ${c} = ${sum}`);
        break;
    }
    else{
        continue;
    }
}
