var arr = [1,3,4,56,6]
var result = arr.find(function(value){
    return value == 6
})
console.log(result)
var index = arr.findIndex(function(value){
    return value == 4
})
console.log(index)