function sample(a,b,cb){
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}
var result = sample(5,8,function(x,y){
    return x - y
})
console.log(result)