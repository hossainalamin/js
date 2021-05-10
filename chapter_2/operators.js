//Operators
var c ='50'
var d = 50
console.log(c === d)
console.log(c !== d)

//math functions 
var a = 4.56
console.log(Math.abs(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))
console.log(Math.round(a))

//date
var date = new Date()
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getMinutes())
console.log(date.getSeconds())

//Short hand of logical operetors
var Name = ""
var fullname = Name || "Alamin"
console.log(fullname)

var isOk = true
isOk && console.log('Everything is ok')