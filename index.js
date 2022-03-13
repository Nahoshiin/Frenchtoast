
function changeName(x){
    var list = document.getElementById("list")
    var item = document.getElementsByClassName("item")[0].cloneNode()
    item.innerHTML = x

    list.appendChild(item);
}

function gobleGabel(){
    fetch("https://jsonplaceholder.typicode.com/users")
  .then(
      (response) => response.json()
      )
  .then(data => {
    data.forEach(element => {
        changeName("<h2>" + element.name + " @username: " + element.username + "</h2>")
    });
  });
}


var veryfunction = jjj => {
    var xxxx = "sdlajd";
}
veryfunction()
gobleGabel()