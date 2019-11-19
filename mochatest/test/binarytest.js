const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility.binarySearch(/[^a-zA-Z]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number',function(){
        let result=Utility.binarySearch(5);
        console.log("resutl at 12 test :",result);
        assert.equal(result,'invalid input');
        
    });
    it ('enter the valid number',function(){
        let result=Utility.binarySearch(undefined);
        console.log("resutl at 18 test :",result);
        assert.equal(result,'invalid input');
        
    });
    it ('enter the valid number',function(){
        let result=Utility.binarySearch(null);
        console.log("resutl at 24 test :",result);
        assert.equal(result,"invalid input");
        
    });
    it ('enter the valid number',function(){
        let result=Utility.binarySearch('@#$');
        console.log("resutl at 30 test :",result);
        assert.equal(result,"invalid input");
        
    });
   
        
    });