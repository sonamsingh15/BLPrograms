/*****************************************************************************
*Execution : 1. default node cmd> node .js
* Purpose:  Maintain the List of CompanyShares in a Linked List So new CompanyShares can
be added or removed easily. Do not use any Collection Library to implement Linked
List.

* @file : js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 28/11/19
*****************************************************************************/
var util = require('../oopsUtility/utility')
var list1 = require('../utility/linklist')
var r1 = require('readline-sync')
var fs = require('fs')
var list = new list1.LinkedList

class stock {
    constructor() {
        var content = fs.readFileSync('/home/bridgeit/Desktop/Sonam/JSON/stock.json')
        this.value = JSON.parse(content)
        console.log(content)
    }
}
class company extends stock {
    addlist() {
        for (let key in this.value.company) {
            list.add(this.value.company[key])
        }
        addcompany()
        {
            var NameOfComany=r1.question("Enter the company Name::")
            var Symbol=r1.question("Enter the symbol of company::")
            var NoOfShare=r1.question("Enter the  number of share ::")
            var price=r1.question("Enter the price of share::")
             let newcompany={
                 "NameOfComany":NameOfComany,
                 "NoOfShare":NoOfShare,
                 "price":price,
                 "Symbol":Symbol
             }
             list.add(newcompany)


        }
    }
}
module.exports = {
    stock
}