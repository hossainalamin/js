var human = {
    name : 'alamin',
    age : "25"
}
console.log(human);
human.height = "174"
console.log(human);
var cow = {
    ears : "2",
    eyes : "2"
}
console.log(cow);
if(cow === human)
{
    console.log("false")
}
else
{
    console.log(true);
} 
delete human.height
console.log(human)