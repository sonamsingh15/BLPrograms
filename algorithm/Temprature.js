/*****************************************************************************
*Execution : 1. default node cmd> node Temperature.js
* Purpose:  take input as farhrenhite and celceeius and they converted into temprature .
* @file : tempurature.js
* @overview : print temperature.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/
const Utility=require('../utility/utility')

console.log("Ente the temperature in farhrenhite:")
var far=Utility.inputRead();
console.log("Ente the temperature celceeius:")
var cel=Utility.inputRead();
Utility.tempcon(far,cel);