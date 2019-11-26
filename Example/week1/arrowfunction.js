//short hand notation for function(), but it does not bind this in the same way.
{
var odds = evens.map(v => v + 1);  // no parentes and no brackets
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
console.log()
}
//------------------------------------
class someClass {
    constructor() {
        this.name = "Name"
    }

    testRegular() {
        return function() { return this }

    }

    testArrow() {
        return () => this.name;
    }
}

var obj = new someClass();

console.log(obj.name)
console.log(obj.testRegular()());
console.log(obj.testArrow()());
//---------------------
 //--syntax for string interpolation------------------------------------

var name = "cat", time = "dog";

var multiLine = `This

Line

Spans Multiple

Lines`


console.log(`Hello ${name},how are you ${time}?`)
console.log(multiLine)
//------Destructuring---------------------------------------------

// list "matching"
var [a, , b] = [1,2,3];
console.log(a)
console.log(b)
//-----------------------------Default

function f(x, y=12) {
  return x + y;
}

console.log(f(3))
//-----------------------------Spread



function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1,2,3]))
//-----------------------------------in arrays:---------------------------------------------

var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"]; 

console.log(lyrics)
//--------------------------Rest operator
function demo(part1, ...part2) {
    return {part1, part2}
}

console.log(demo(1,2,3,4,5,6))
//--------------------------Let operator-----------------------------
{
    var globalVar = "from demo1"
 }
 
 {
    let globalLet = "from demo2";
 }
 
 console.log(globalVar)
 console.log(globalLet)
//-------------constant operatorconst ------------------------
a = { a: "a" }
a.a = "b"
console.log(a)
//------------
//New type of iterator, an alternative to for..in. It returns the values instead of the keys.

let list = [4, 5, 6];

console.log(list)

for (let i in list) {
   console.log(i);
}
