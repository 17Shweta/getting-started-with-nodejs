var http = require('http')

http.createServer(function(req,res){

    //res.writeHead(200,{'Content-Type':'text/html'})
    res.write("it's node js implemented by shweta mishra")
    res.end()
}).listen(8080)


// first open new terminal
//then write node simpleWebServiceUsingNodeJs (i.e. name of file).js
//then open browser
//http://127.0.0.1:8080/ use this line to run the code
//make sure it is not running on another terminal