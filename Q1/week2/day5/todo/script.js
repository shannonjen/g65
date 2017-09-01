var butt = document.querySelector('button');
var inputBox = document.querySelector('input');
var toDoList = document.querySelector('ul')

butt.addEventListener('click', function(){
  var li = document.createElement('li')
  li.textContent = inputBox.value
  toDoList.appendChild(li)
})
