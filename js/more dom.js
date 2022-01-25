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