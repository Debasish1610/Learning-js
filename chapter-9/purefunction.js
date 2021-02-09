// pure functions returns same results for same arguments
// it does not cause any observable side effect. 

//this function is pure function because it return same results for same argument.
function squere(n)
{
    return n*n;
}

console.log(squere(2));
console.log(squere(2));
console.log(squere(2));