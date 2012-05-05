var http = require("http");
var querystring = require("querystring");
var file_system = require("./file-system").file_system;
http.createServer(function(request, response) {
  var data = "";
  
  // serve static form 
  if (request.method == "GET") {

        getFile(__dirname + "/public/simpleForm.html", response);
  }
  
  // handle form post
  if (request.method == "POST") {
    request.on(
                    "data", 
                    function(chunk) 
                    {
                         console.log('hahahahah');
                        // append received data
                        data += chunk;
                    }
              );
    
    
    request.on(
                "end",
                function() 
                { 
                    // get key/value pairs from received data var 
                    params = querystring.parse(data),
                   // html = params.name + params.score + "!</h1></body></html>";
                    file_system.load();
                    file_system.data_push(params.name, params.score);
                    file_system.save();
                    response.end(""); 
                }
            );
    }
 
}).listen(8000);


//http.createServer(function(req, res) {}
 // ).listen(8000);


function getFile(localPath, response)
 {  
 //...
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World <form action='' method = 'post' >"+
  "<input type = 'text' name = 'name'/>" +
  "<input type = 'text' name = 'score'/>" +
  "<input type = 'submit' value = 'abc' /> </form>");
  response.end();
}