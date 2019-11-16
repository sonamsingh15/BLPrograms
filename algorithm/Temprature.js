const Utility=require('../utility/utility')

console.log("Ente the temperature in farhrenhite:")
var far=Utility.inputRead();
console.log("Ente the temperature celceeius:")
var cel=Utility.inputRead();
Utility.tempcon(far,cel);