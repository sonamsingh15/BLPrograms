const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility.prime(/[^0-9]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number',function(){
        let result=Utility.prime(5);
        console.log("resutl at 12 test :",result);
        assert.equal(result,true);
        
    });
    it ('enter the valid number',function(){
        let result=Utility.prime(undefined);
        console.log("resutl at 17 test :",result);
        assert.equal(result,'invalid input');
        
    });
    it ('enter the valid number',function(){
        let result=Utility.prime(null);
        console.log("resutl at 19 test :",result);
        assert.equal(result,"invalid input");
        
    });
    it ('enter the valid number',function(){
        let result=Utility.prime("string");
        console.log("resutl at 31 test :",result);
        assert.equal(result,"invalid input");
        
    });
   
        
    });
