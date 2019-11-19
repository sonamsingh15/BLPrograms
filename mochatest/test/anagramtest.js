const assert=require('chai').assert;
const Utility=require('../../utility/utility')

describe('result',function(){
    it ('enter the valid number',function(){
        let result=Utility. anagram(/[^a-zA-Z]/);
        console.log("resutl at 7 test :",result);
        assert.equal(result,"invalid input");
    });
    it ('enter the valid number',function(){
        let result=Utility. anagram(5);
        console.log("resutl at 12 test :",result);
        assert.equal(result,'invalid input');
        
    });
    // it ('enter the valid number',function(){
    //     let result=Utility. anagram(undefined);
    //     console.log("resutl at 18 test :",result);
    //     assert.equal(result,'undefined');
        
    // });
   
        
    });