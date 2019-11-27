var fs=require('fs');
var r1= require('readline-sync')
module.exports=
{
    readFile(path)
    {
     var content=fs.readFileSync(path);
     return content;
    },
    writeFile(path,data)
    {
     fs.writeFileSync(path,data,'utf8');
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
