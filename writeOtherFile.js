var fs = require('fs')

fs.writeFile('cal1.js','console.log("done")',function(err){
    console.log("Data Saved")
})

//we can also use appendFile to add content to existinf file


//to del the file use this code

//var fs = require('fs')
//fs.unlink('calc1.js',function(err){
//    console.log('Deleted')
//})