var obj = {
    length : 50,
    width : 40,
    draw : function(){
        console.log("Im a rectecgle")
        this.printrect()
    },
    printrect : function(){
        console.log("My length is "+this.length)
        console.log("My width is "+this.width)
    }
}
function myFunction(){
    obj.printrect()
}
myFunction();
var another = {
    length : 100,
    width : 50,
    print : obj.printrect
}
another.print()