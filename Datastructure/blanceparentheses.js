/**********************************************************************************************
*Execution : 1. default node cmd> node blancedparenthese.js

* Purpose: Take an Arithmetic Expression such as(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
           where parentheses are used to order the performance of operations. Ensure 
           parentheses must appear in a balanced fashion.

* @file : blancedparenthese.js
* @overview : Write a Stack Class to push open parenthesis “(“ and pop closed
        parenthesis “)”. At the End of the Expression if the Stack is Empty then the
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
***********************************************************************************************/
const Utility = require('../utility/stack');

var st = new Utility.Stack;

        console.log("Enter the expression ")
        var string = Utility.inputRead();
        var expression = string.split("")

        for (let i = 0; i < expression.length; i++) 
        {
            if (expression[i] == '(')
             {
                st.push('(')

            }
            else if (expression[i] == ')') 
            {
                if (st.isEmpty())
                 {
                    st.push(')')
                    break

                }
                st.pop()

            }
        }
        if (st.isEmpty())
         {
            console.log("parenthesis is blanced:");
        }
        else 
        {
            console.log("parenthesis in not blanced")
      }
    

