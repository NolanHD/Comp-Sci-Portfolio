var button = document.getElementById("button");
var x = 0;

function randomizePage(){
document.getElementById("body").style.backgroundColor = randomColor();
document.body.appendChild( randomElement()   );
}

button.addEventListener("click", randomizePage);

function randomElement(){
    var tempL = document.createElement("div");
    tempL.innerHTML = randomWord();
    tempL.style.backgroundColor = randomColor();
    tempL.style.color = randomColor();
    tempL.style.position = "absolute";
    tempL.style.top = Math.floor((Math.random() * document.body.scrollHeight ) + 1) + "px";
    tempL.style.left = Math.floor((Math.random() * document.body.scrollWidth ) + 1) + "px";
    return tempL;
}

function randomColor(){
    var color;
    var colors = ["white", "pink","red", "blue", "green", "yellow", "teal", "purple", "orange", "indigo", "aqua", "brown", "crimson", "lightslategrey","chartreuse"];
    x =  Math.floor(( Math.random()* colors.length));
    color = colors[x];  
    return color;
}

function randomWord(){
    var word;
    var words = ["The Berlin Wall", "The Great Wall of China", "I hate walls", "Donald Trump's Wall", "Brick Wall", "Concrete Wall", "#DankSquad", "White Walls", "Dr. Dank, tear down this wall", "He came in like a wrecking ball", "Wooden Walls", "Stone Walls", "Facebook Walls"];
    x =  Math.floor(( Math.random()* words.length));
    word = words[x];  
    return word;
}