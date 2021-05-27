function add(a,b){
    return a+b
}
var sum = add
console.log(sum(1,2))
var arr = []
arr.push(add)
console.log(arr[0](12,13))
var obj = {
    sum : add
}
console.log(obj.sum(11,11))