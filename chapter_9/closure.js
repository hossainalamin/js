function closure(){
    var c = 10
    function test(){
        console.log(x)
    }
    test()
}
var abc = closure()
console.dir(abc)