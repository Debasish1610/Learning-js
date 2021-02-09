var a = 'I am ';
var b = 'Debasish';

var c = a + b;
console.log(c);

c = a.concat(b); 
console.log(c);

console.log(a.length);

console.log(a.indexOf('am')); 
console.log(b.lastIndexOf('s'))

console.log(a.search('am'));

console.log(a.substring(2, 4)); // subtring(start, end)
console.log(a.substr(2, 2)); // substr(startindex, length);

console.log(b.replace('Debasish', 'Akash'));

console.log(a.toLowerCase());
console.log(a);
console.log(a.toUpperCase());

console.log(a.trim());//remove all white space from start and end 

var x = '65';
console.log(x.padStart(5, 0));
console.log(x.padEnd(7, 0));

console.log(a.charAt(2));
console.log(a.charCodeAt(2)); // it return unicode value.
console.log(a[2]);

console.log(c.split(' '));