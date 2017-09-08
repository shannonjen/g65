var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState == 4 && request.status == 200){
    var response = JSON.parse(request.responseText)
    console.log(response.data.children[0].data.title);
  }
}

request.open('GET', 'https://www.reddit.com/r/starwars.json')

request.send();
