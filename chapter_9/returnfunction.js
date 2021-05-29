function greet(msg){
    function greeting(name){
        return msg + ' ' + name + '!'
    }
    return greeting
}
var hello = greet("Hello")
console.log(hello("Alamin"))

function base(b){
    return function(n){
        var result = 1
        for(var i = 1 ; i <= b ; i++){
            result *= n
        }
        return result
    }
}
var power = base(10)
console.log(power(2))