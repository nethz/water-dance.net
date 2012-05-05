var fs = require("fs");
var file_system = {};


file_system.data =[
{"name":"zhang", "score":"100"},
{"name":"wang", "score":"11"},
{"name":"zhao", "score":"10"},
{"name":"li", "score":"101"}
];

file_system.data_cut = function(n)
{

    file_system.data_sort();
    if(file_system.data.length > n)
    {
        file_system.data.split(0, n + 1);
    }
    
}


file_system.data_push = function(name, score)
{
    var obj = {"name":name, "score":score};
    file_system.data.push(obj);
    file_system.data_cut(100);

}

file_system.print = function()
{
     console.log('save has finished'+  JSON.stringify(file_system.data));
}


file_system.data_sort = function()
{
    file_system.data.sort(
        function(x,y){return parseInt(y.score) - parseInt(x.score);}
    );
}

file_system.save  = function()
{
    
    fs.writeFileSync("data.json",  JSON.stringify(file_system.data), "utf-8",
        function(e)
        {
            if(e) 
                throw e;
            console.log('save has finished');
        }
    )
    

}

file_system.load = function()
{
     fs.readFile("data.json", "utf-8", 
        function(err, data)
        {
            if(err) 
                throw err;
            
            console.log(data +"!!!");
            //if(data)
          //  if(data)
            //{
                file_system.data = JSON.parse(data);
                console.log('load has finished' + file_system.data[0].name);
         //   }
        }
    )
    

}



exports.file_system = file_system;