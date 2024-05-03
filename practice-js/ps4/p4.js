//1.console.log('har/"'.length)=4
//2. includes,startsWith,endsWith functions of a string
let text = 'Hello World.';
console.log(text.includes('Hello'));
console.log(text.includes('hello'));
console.log(text.startsWith('Hello'));
console.log(text.startsWith('hello'));
console.log(text.startsWith('World',6));
console.log(text.startsWith('world',6));
console.log(text.endsWith('World.'));
console.log(text.endsWith('World.',12));
console.log(text.endsWith('world.',12));
//3. lowercase conversion
console.log (`3. ${text.toLowerCase()}`)
//4.substring
text = 'Please give Rs 1000';
console.log(`4. ${text.substring(12)}`);
//5. no we cant change string its immutable