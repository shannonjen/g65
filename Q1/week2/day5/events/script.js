//
// var p1 = document.querySelector('#par1');
// var p2 = document.querySelector('#par2');
// var p3 = document.querySelector('#par3');
//
// p1.addEventListener('click', function(event){
//   console.log(event)
// })
//
// p2.addEventListener('click', function(event){
//   console.log(pars[i])
// })
//
// p3.addEventListener('click', function(event){
//   console.log(event.target.textContent)
// })





var pars = document.querySelectorAll('p');


for (var i = 0; i<pars.length; i++) {
  pars[i].addEventListener("click", function(event){
    console.log(event.target.textContent);
  })
}














// var el = document.querySelector('button');
//
//
// el.addEventListener('click', function(event){
//   console.log(event.target.textContent);
//   alert("You clicked me!");
// })


// document.querySelector('body').addEventListener('click', function(){
//   document.querySelector('body').innerHTML = "<h1>This is new!</h1>";
// })
