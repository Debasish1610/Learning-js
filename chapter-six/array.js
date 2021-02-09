var arr = [3, 4, 5, 5];
console.log(arr);
console.log(arr[2]);
arr[4] = 8;
console.log(arr.length);
arr[10] = 23;
console.log(arr);
console.log(arr.length);

arr.push(56);
console.log(arr);
console.log(arr.length);

//array traversing
for(var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

arr.unshift(596); // insert to start position
console.log(arr);
console.log(arr.length);

arr.splice(3, 0, 33);
console.log(arr);
console.log(arr.length);

arr.splice(3, 0, 34, 35); 
console.log(arr);
console.log(arr.length);


arr.pop(); // remove last element from array
console.log(arr);

arr.shift(); // remove first element from array
console.log(arr);

arr.splice(3, 1) // remove 4th element from the array
console.log(arr);

console.log(arr.reverse());
console.log(arr);


var temp = [4, 5, 3, 4, 5, 6, 76, 2, 4];

for(var i in temp)
{
    console.log(temp[i]);
}

