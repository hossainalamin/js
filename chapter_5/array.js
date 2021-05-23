var arr = [1,2,3,4]
//arr[9] = 10 //valid
console.log(arr.length)
console.log(arr)
var sum = 0
for(var i = 0 ; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)

arr.push(5) //last add
console.log(arr)
arr.pop() //last remove
console.log(arr)

arr.unshift(5)//first of array add
console.log(arr)
arr.shift()//first of array remove
console.log(arr)

arr.splice(3,0,8)//8 to add
console.log(arr)
arr.splice(3,1)//3 rd position to remove
console.log(arr)

// Array function
var array1 = [1,2,3]
console.log(array1.join('|'))
arr.fill(0)
console.log(arr)
array3 = array1.concat(arr)
console.log(array3)
console.log(Array.isArray(arr))

var a = [2,4,6]
var b = Array.from(a)
b[0]  = 8 
console.log(b)
