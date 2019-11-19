const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility.factor(/[^0-9]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number',function(){
        let result=Utility.factor(5);
        console.log("resutl at 12 test :",result);
        assert.equal(result,undefined);
        
    });
     it ('enter the valid number',function(){
         let result=Utility.factor(undefined);
         console.log("resutl at 18 test :",result);
         assert.equal(result,"invalid input");
        
     });
    it ('enter the valid number',function(){
        let result=Utility.factor(null);
        console.log("resutl at 24 test :",result);
        assert.equal(result,"invalid input");
        
    });
    it ('enter the valid number',function(){
        let result=Utility.factor("string");
        console.log("resutl at 31 test :",result);
        assert.equal(result,"invalid input");
        
    });
   
        
    });