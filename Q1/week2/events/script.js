var el = document.querySelector('button');


el.addEventListener('click', function(event){
  console.log(event.target.textContent);
  alert("You clicked me!");
})


// document.querySelector('body').addEventListener('click', function(){
//   document.querySelector('body').innerHTML = "<h1>This is new!</h1>";
// })
