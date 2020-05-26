exports.add = function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//we can use this also to export
//module.exports.add = add
//or we can simply write 
//exports.add = add
module.exports.sub = sub