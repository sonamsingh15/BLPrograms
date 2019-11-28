var fs=require('fs');
var r1= require('readline-sync')
module.exports=
{
    readFile(path)
    {
     var fs=require('fs')   
     var content=fs.readFileSync(path,JSON.parse(path),'utf8');
     return content;
    },
    writeFile(path,data)
    {
    var fs =require('fs')
    var content=fs.writeFileSync(path,data,'utf8');
    return content;
    },
   
    inputStringRead()
    {
        try
        {
            let value =r1.question("");
            if(value == undefined)  throw 'cannot be undefined'
            return values;


        }
        catch(error){
            return error
        }
        
    },
    inputIngerRead()
    {
        try
        {
            let value=r1.question("")
            if(value == undefined) throw 'cannot be undeffined'
            return value;
        }
        catch(error)
        {
            return error
        }
        
    },
}
