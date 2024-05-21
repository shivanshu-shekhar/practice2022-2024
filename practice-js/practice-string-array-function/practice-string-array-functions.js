//1 function practice (a) normal function 
function adder(a,b){
    return a+b;
}
console.log(`1a. ${adder(5,6)}`);
//(b) annonymous function
let subtractor = function(a,b) {
    return a-b;
}
console.log(`1b. ${subtractor(5,6)}`);
//(c) arrow funtion 
let divider = (a,b) => {
    return a/b;
}
console.log(`1c. ${divider(12,6)}`);

//2 string(imutable) functions (a) .length function and``backtics
let name ='Shiv';
console.log(`2a. ${name.length}`);
//(b)escape sequence \n,\b,\t,\s .toUpperCase() and .toLowerCase()
let capitalName = name.toUpperCase();
let smallName = name.toLowerCase();
console.log(`2b.original name ${name}name in allcaps ${capitalName} name in small letter${smallName}`);
//(c) .slice()=.substr()=.substring()
name = `disaster`;
console.log(`2c. ${name.substr(2)} ${name.substring(2)} ${name.slice(2)} 
${name.slice(2,5)} ${name.substring(2,5)} ${name.substr(2,5)}`);
//(d) .contact() and + operator
console.log(`2d. ${capitalName+smallName} ${capitalName.concat(smallName)}`);
let e = [1,2,3,4];console.log(e);
e.splice(1,1,4,);console.log(e);
e.splice(1,1,4,5);console.log(e);
e.splice
e.splice(5,0,6);console.log(e);
