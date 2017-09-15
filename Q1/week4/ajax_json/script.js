// var students = {
//   "peeps": [{
//     "firstName": "Josh",
//     "favFood": "Coffee Pudding"
//   },{
//     "firstName": "Matt",
//     "favFood": "Birds"
//   },{
//     "firstName": "Romeo",
//     "favFood": "Salad"
//   }
//   ]
// }
$.getJSON("students.json",function(data){
  console.log(data);
  var peeples = data.peeps;
  var result = "";
  for (var i = 0; i<peeples.length; i++){
    result = result + "<div><ul><li>"+peeples[i].firstName+"</li><li>"+peeples[i].favFood+"</li></ul></div>"
  }
  document.querySelector("#main").innerHTML = result;
})
