function passA(a)
{
    return function(b){
        return function(c)
        {
            return a + b + c;
        }
    }
}

var result = passA(10)(20)(30);
console.log(result);