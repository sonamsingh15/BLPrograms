/*****************************************************************************
*Execution : 1. default node cmd> node blancedparenthese.js
* Purpose: 
* @file : blancedparenthese.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
*****************************************************************************/
const Utility=require('../utility/stack');

var st = new Utility.Stack;
console.log("Enter the expression ")
 var string=Utility.inputRead();
 var expression =string.split("")
 
 for(let i=0; i<expression.length; i++){
     
     
     if(expression[i] == '('){
         st.push('(')
    
     }else if(expression[i]==')'){
         if(st.isEmpty()){
             st.push(')')
             break
             
         }
         st.pop()
        
     }
 }if(st.isEmpty()){
    console.log("parenthesis is blanced:");
}else{
    console.log("parenthesis in not blanced")
}