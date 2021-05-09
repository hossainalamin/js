var date  = new Date()
var today = date.getDay()
switch(today){
    case 0 : 
        console.log('Today is sunday')
        break
    case 1 : 
        console.log("Today is monday")
        break
    default:
        console.log("Any of rest")
        break
}