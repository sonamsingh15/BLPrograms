{var x = 3;
function func(randomize) {
    if (randomize) {
        var x= Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
}

//-------------------------------example
var x1 = 3;
function func(randomize) {
    var x1;
    if (randomize) {
        x1 = Math.random();
        return x1;
    }
    return x1;
}
func(false); // undefined

//------------------------------------example
let X = 3;
function func(randomize) {
    if (randomize) {
        let X= Math.random();
        return X;
    }
    return X;
}
func(false); // 3
console.log(X)
//---------------------------------------------
