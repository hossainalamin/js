function add(a, b){
    return a + b
}
function higerFunction(a,b,func){
    var c = a + b
    var d = a - b
    function multiply(){
        var m = func(a, b)
        return c*d*m
    }
    return multiply()
}
var calculate = higerFunction(3,4,add)
console.log(calculate)