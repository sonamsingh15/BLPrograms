const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility.flipcoin(/[^0-9]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number',function(){
        let result=Utility.flipcoin(5);
        console.log("resutl at 12 test :",result);
        assert.equal(result,true);
        
    });
    it ('enter the valid number',function(){
        let result=Utility.flipcoin(undefined);
        console.log("resutl at 17 test :",result);
        assert.equal(result,'invalid input');
        
    });
    it ('enter the valid number',function(){
        let result=Utility.flipcoin(null);
        console.log("resutl at 19 test :",result);
        assert.equal(result,"invalid input");
        
    });
    it ('enter the valid number',function(){
        let result=Utility.flipcoin("string");
        console.log("resutl at 31 test :",result);
        assert.equal(result,"invalid input");
        
    });
        
    });
