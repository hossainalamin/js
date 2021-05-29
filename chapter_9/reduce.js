var arr = [1,2,3,4,56,6]
var reduceNumber = arr.reduce(function(prev,curr){
    return prev + curr
},100)
var max = arr.reduce(function(prev,corr){
    return Math.max(prev, corr)
})
console.log(reduceNumber)
console.log(max)