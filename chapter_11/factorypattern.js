var creatrect = function (length, width) {
    return {
        length: length,
        width: width,
        draw: function () {
            console.log("Im a rectecgle")
            this.printrect()
        },
        printrect: function () {
            console.log("My length is " + this.length)
            console.log("My width is " + this.width)
        }
    }
}
var rect1 = creatrect(10, 5)
rect1.draw()
var rect2 = creatrect(100, 50)
rect2.draw()