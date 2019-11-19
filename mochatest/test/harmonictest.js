const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility.harmonic(/[^0-9]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number(',function(){
        let result=Utility.harmonic(3);
        console.log("resutl at 12 test :",result);
        assert.equal(result,true);
        
    });
    it ('enter the valid number',function(){
        let result=Utility.harmonic(undefined);
        console.log("resutl at 17 test :",result);
        assert.equal(result,'invalid input');
        
    });
    it ('enter the valid number',function(){
        let result=Utility.harmonic(null);
        console.log("resutl at 19 test :",result);
        assert.equal(result,"invalid input");
        
    });
    it ('enter the valid number',function(){
        let result=Utility.harmonic("string");
        console.log("resutl at 31 test :",result);
        assert.equal(result,"invalid input");
        
    });
   
        
    });
