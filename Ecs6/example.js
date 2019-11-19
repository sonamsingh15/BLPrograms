var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
func(false); // undefined
console.log("demo",func(true))
//--------------------------------
console.log();
function printCoord(x, y) {
    console.log('('+x+', '+y+')');
}
function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}




