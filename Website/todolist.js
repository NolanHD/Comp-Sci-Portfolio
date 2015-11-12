// JavaScript File
var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    dropdown= document.getElementById("dropdown");


    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  
  if (dropdown.value == "underline"){
    todo.innerHTML += '<div style= "text-decoration: underline;">' + text + '</div>';
  }
  if (dropdown.value == "bold"){
    todo.innerHTML += '<div style= "font-weight: bold;">' + text + '</div>';
  }
  if (dropdown.value == "red"){
    todo.innerHTML += '<div style= "color: red;">' + text + '</div>';

  }
  if (dropdown.value == "italics"){
    todo.innerHTML += '<div style= "font-style: italic;">' + text + '</div>';
  }
  if (dropdown.value == "none"){
    todo.innerHTML += '<div>' + text + '</div>'
  }
  
  evt.preventDefault();
}, false);



todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;

  
  if(tar.style.textDecoration === "line-through"){
    tar.parentNode.removeChild(tar);
  }
  else{
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);