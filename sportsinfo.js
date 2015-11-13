// JavaScript File
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

var sportsinfo1 = document.getElementById("sportsinfo1");
var sportsinfo2 = document.getElementById("sportsinfo2");
var sportsinfo3 = document.getElementById("sportsinfo3");

// When the item is clicked it executes the code which changes
// the inner html which shows a message at the bottom of the page.
item1.addEventListener("click", function(){
    
    sportsinfo1.innerHTML = "Soccer <br>- Soccer is played in two 45 minute halves.";
    sportsinfo2.innerHTML = "- Soccer is the most played sport in the world.";
    sportsinfo3.innerHTML = "- There are 11 players on each team.";
});
                       
item2.addEventListener("click", function(){
    
    sportsinfo1.innerHTML = "Football <br> - American Football grew out of English sports such as rugby and soccer and became popular on American college campuses in the late 1800s.";
    sportsinfo2.innerHTML = "- The most watched television event in the United States is the Super Bow";
    sportsinfo3.innerHTML = "- It takes about 600 cows to make one full season's worth of NFL footballs";
});

item3.addEventListener("click", function(){
    
    sportsinfo1.innerHTML = "Hockey <br> - The diameter of a hockey puck is three inches.";
    sportsinfo2.innerHTML = "- Wayne Gretzky holds 61 NHL records, the most by far of any player.";
    sportsinfo3.innerHTML = "- Before games, hockey pucks are frozen to prevent them from bouncing during play.";
});

item4.addEventListener("click", function(){
    
    sportsinfo1.innerHTML = "Basketball <br> - The first hoops were actually just peach baskets and the first backboards were made of wire.";
    sportsinfo2.innerHTML = "- The Chicago Bulls have won all six NBA Finals in which they've appeared.";
    sportsinfo3.innerHTML = "- The NBA instituted the three-pointer before the 1979-80 season, an idea it borrowed from the ABA.";
});