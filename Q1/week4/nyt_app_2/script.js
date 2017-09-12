document.querySelector("#searchForm").addEventListener("submit", function(event){
  event.preventDefault();
  var searchTerm = document.querySelector("input").value;
  $.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=94c4bd804f4c41cf8750dbe6e6e22fee&q="+searchTerm, function(data){
    var responseArray = data.response.docs;
    var domString = "";
    for(var i=0; i<responseArray.length; i++) {
      if (responseArray[i].multimedia.length != 0) {
        domString = domString + "<img src=https://static01.nyt.com/"+responseArray[i].multimedia[0].url+">"
      }
    }
    document.querySelector("#response").innerHTML = domString;
  })
})
