function add(a, b){
    var result = a + b
    console.log(result)
}
add(10,3)
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]
function someOfArray(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i] 
    }
    console.log(sum)
}
someOfArray(arr1)
//function expression with anonimous function (has no name)
var addition = function(a, b){
    return a+b
}
var sum = addition
console.log(sum(12,13))

setTimeout(function(){
console.log('I will call after 5 sec')
},5000)