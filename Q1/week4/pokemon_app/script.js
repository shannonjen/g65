var searchForm = document.querySelector('#pokeSearch');

searchForm.addEventListener("submit", function(event){
  event.preventDefault();
  var searchTerm = document.querySelector('input').value;
  $.get('https://pokeapi.co/api/v2/pokemon/'+searchTerm,function(data){
    console.log(data)
  })
  // console.log(searchTerm);
})
