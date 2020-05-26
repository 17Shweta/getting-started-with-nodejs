//in this we will read the content of the calc file

var fs = require('fs')

fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})