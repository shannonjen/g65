var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState == 4 && request.status == 200){
    var response = JSON.parse(request.responseText)
    var childrenArray = response.data.children
    for(var i=0; i< childrenArray.length; i++){
      console.log(childrenArray[i].data.title);
    }
  }
}

request.open('GET', 'https://www.reddit.com/r/starwars.json')

request.send();
