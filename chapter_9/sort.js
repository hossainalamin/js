var arr = [32,43,54,6,65,7,6]
// arr.sort()
// console.log(arr)
var persons = [
    {
        name : "Alamin",
        age  : 25 
    },
    {
        name : "Rokib",
        age  : 24
    },
    {
        name : "Sojib",
        age  : 23 
    }
]
arr.sort(function(a,b){
    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
})
persons.sort(function(a , b){
    if(a.age > b.age){
        return 1
    }else if (a.age < b.age){
        return -1
    }else{
        return 0
    }
})
var result1 = arr.every(function(value){
    return value % 2 == 0
})//check all element
var result2 = arr.every(function(value){
    return value >= 0
})//check all element

var resultOfSome1 = arr.some(function(value){
    return value % 2 == 0
})
var resultOfSome2 = arr.some(function(value){
    return value >= 0
})
console.log(arr)
console.log(persons)
console.log(result1)
console.log(resultOfSome1)
console.log(result2)
console.log(resultOfSome2)