var text = document.getElementById('table').innerText;
console.log(text);
var html = document.getElementById('table').innerHTML;
console.log(html);
// // var className = document.getElementsByClassName('col');
// // console.log(className)
// var getElement = document.getElementById('table').getAttribute('class');
// console.log(getElement);

// document.getElementById('nav').setAttribute('style',"height:120px");
// document.getElementById('nav').removeAttribute('style');
// var check = document.querySelector('.col').innerHTML;
// console.log(check);
// document.querySelector("#nav").style.height = "90px"
// //document.querySelector("#nav").className ="bg-primary"
// //document.querySelector("#nav").classList.add("bg-primary")
// //document.querySelector("#nav").classList.remove("bg-primary")
// document.getElementById("table").addEventListener("click",function(){
//     this.classList.add('bg-primary');
// });
document.querySelector('#table').addEventListener('mouseleave',abc);
function abc(){
    document.getElementById('table').classList.add("bg-danger");
}
// document.getElementById("table").addEventListener('click',xyz);
// function xyz(){
//     document.getElementById('table').removeEventListener('mouseleave',abc);
// }
document.querySelector('.table').addEventListener('click',function(){
    this.classList.toggle('bg-danger');
});
