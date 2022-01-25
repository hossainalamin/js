var a = document.getElementById('table').parentElement;
console.log(a);
var b = document.getElementById('table').children;
console.log(b);
var c = document.getElementById('table').firstElementChild;
console.log(c);
var d = document.getElementById('table').lastElementChild;
console.log(d);
var e = document.getElementById('table').firstChild;
console.log(e);
var f = document.getElementById('table').lastChild;
console.log(f);
var g = document.getElementById('table').nextElementSibling;
console.log(g);
var h = document.getElementById('table').previousElementSibling;
console.log(h);

var insertElement = document.createElement('h1');
console.log(insertElement);
var insertText = document.createTextNode("Hi js is nice")
console.log(insertText)
var comment = document.createComment("this is a comment");
console.log(comment)
insertElement.appendChild(insertText);
// document.querySelector('#header').appendChild(insertElement)
var target = document.getElementById("header")
target.insertBefore(insertElement,target.childNodes[0]);
function abc(){
    var target = document.querySelector('#para');
    var element = "<p>The extra paragraph shown by the click of see more button using js.Js is awesome.I am loving js for the event</p>";
    return target.insertAdjacentHTML('beforeend',element)
}
// document.querySelector("#para").addEventListener('mouseout',function(){
//     var element = document.createElement("p")
//     var text = document.createTextNode("More more more more and more js")
//     element.appendChild(text);
//     this.insertAdjacentElement('beforeend',element);
// })