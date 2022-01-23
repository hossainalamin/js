var text = document.getElementById('table').innerText;
// console.log(text);
// var html = document.getElementById('table').innerHTML;
// console.log(html);
// var className = document.getElementsByClassName('col');
// console.log(className)
var getElement = document.getElementById('table').getAttribute('class');
console.log(getElement);

document.getElementById('nav').setAttribute('style',"height:120px");
document.getElementById('nav').removeAttribute('style');
