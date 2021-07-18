var Rectengle = function (length, width) {
        this.length = length
        this.width = width
        this.draw  = function () {
            console.log("Im a rectecgle")
            this.printrect()
        },
        this.printrect = function () {
            console.log("My length is " + this.length)
            console.log("My width is " + this.width)
        }
}
var rect1 = new Rectengle(10, 5)
rect1.draw()
