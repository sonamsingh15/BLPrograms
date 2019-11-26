var typeSymbol = Symbol("type");

class Pet {

  constructor(type) {

    this[typeSymbol] = type;

  }
  getType() {
     return this[typeSymbol];
  }

}


var a = new Pet("dog");
console.log(a.getType());
console.log(Object.getOwnPropertyNames(a))


console.log(Symbol("a") === Symbol("a"))
console.log();
//------------------------------------------
var set = new Set();
set.add("Potato").add("Tomato").add("Tomato");
console.log(set.size)
console.log(set.has("Tomato"))

for(var item of set) {
   console.log(item)
   
}
console.log()
//-----------------------Weaktest example______----------------------------------------------
var item = { a:"Potato"}
var set = new WeakSet();
set.add({ a:"Potato"}).add(item).add({ a:"Tomato"}).add({ a:"Tomato"});
console.log(set.size)
console.log(set.has({a:"Tomato"}))
console.log(set.has(item))

//for(let item of set) {
   console.log(item)
//}
//-------------------mapExample------------------------
var map = new Map();
map.set("Potato", 12);
map.set("Tomato", 34);

console.log(map.get("Potato"))


for(let item of map) {
   console.log(item)
}


for(let item in map) {
   console.log(item)
}
console.log()
//--------------iterator---------------------
let infinite = {
    [Symbol.iterator]() {
      let c = 0;
      return {
        next() {
          c++;
          return { done: false, value: c }
        }
      }
    }
  }
  
  console.log("start");
  
  for (var n of infinite) {
    // truncate the sequence at 1000
    if (n > 10)
      break;
    console.log(n);
  }
  console.log()
  //-------------------------generator----------
  //Generators create iterators, and are more dynamic than iterators.
  // They do not have to keep track of state in the same manner and do not support
  // the concept of done.

var infinity = {
  [Symbol.iterator]: function*() {
    var c = 1;
    for (;;) {   
      yield c++;
    }
  }
}

console.log("start")
for (var n of infinity) {
  // truncate the sequence at 1000
  if (n > 10)
    break;
  console.log(n);
}
