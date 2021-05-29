var arr = [2,3,4,5,67,8,9]
var filteredArr = arr.filter(function(value){
    return value % 2 == 0
})
console.log(filteredArr)