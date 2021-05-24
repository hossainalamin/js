var point = {
    x : 5,
    y : 6
}
point.z = 30
console.log(point)
console.log(point['x'])
var show = 'x'
console.log(point[show])

//remove property from a object
delete point.z
console.log(point)
//object compare
var obj1 = {
    a : 10,
    b : 30
}
var obj2 = {
    a : 10,
    b : 30
}
if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
}else{
    console.log(fasle)
}
if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log(true)
}
//iteration
for(var i in obj1){
    console.log(i)
    console.log(i + ':' + obj1[i])
}
//method in object
console.log(Object.keys(obj1))//return array
console.log(Object.values(obj1))//return array
console.log(Object.entries(obj1))//return array
var obj3 = Object.assign({},obj1)