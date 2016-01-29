var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
//there are 4 vars 2 for each side. The rightPtInt starts at 0 and the integer goes up every time the ball collides 
var leftPtdis = document.getElementById("left");
var leftPtInt = 0;
var rightPtDis = document.getElementById("right");
var rightPtInt = 0;

var soundRight = new Audio('http://dl.dropbox.com/u/26141789/canvas/pingpong/Metal%20Cling%20-%20Hit.mp3');
var soundLeft = new Audio('http://dl.dropbox.com/u/26141789/canvas/pingpong/Metal%20Cling%20-%20Hit.wav');
var ball = {
	xPos: 245,
	yPos: 200,
	radius: 5,
// this is the velocity of the ball it travels 4 pixels per second.
	dx: 4,
	dy: 4,
// this resets the ball speed once it begins to speed up.
	initDx: 4,
	initDy: 4,

// @desc this function draws the ball but it doesn't move yet.
	draw: function() {
		ctx.beginPath();
		ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
	},
	//this is where the ball begins to move. 
	move: function() {

		if (this.yPos >= 495 || this.yPos <= 5) {
			this.dy = -1 * this.dy;
		}

		if (this.xPos >= 500 || this.xPos <= 5) {
			if (this.xPos >= 500) {
				leftPtInt++;
				leftPtdis.innerHTML = leftPtInt;

			}
			// in this if statement it does two things. When the x.Pos of the ball is more than or equal to 500 or less than or equal to 5 on the x axis. the var leftPtInt is increased by one and the leftPtdis displays the integer leftPtInt as a string onto the html.
			if (this.xPos <= 2) {

				rightPtInt++;
				rightPtDis.innerHTML = rightPtInt;
			}
			


			this.xPos = 245;
			this.yPos = 200;
			this.dx = ball.initDx;
			this.dy = ball.initDy;
		
		}
// this piece of code pretty much says that when the x.Pos matches with the rightPad.Xpos AND the y.Pos of the ball and the rightPad.yPos the ball will reverse and the speed will increase by a factor of -1.1.
		if (this.xPos >= rightPad.xPos && this.yPos >= rightPad.yPos && this.yPos <= rightPad.yPos + 80) {
			this.dx = -1.1 * this.dx;
			soundRight.play();

		}
		

// this is the same as above but for the left paddle. both of them also play sounds from the var soundRight or soundLeft.
		if (this.xPos <= leftPad.xPos + 25 && this.yPos >= leftPad.yPos && this.yPos <= leftPad.yPos + 80) {
			this.dx = -1.1 * this.dx;
			soundLeft.play();
		}

		this.xPos = this.xPos + this.dx;
		this.yPos = this.yPos + this.dy;
	},

};
// This var sets out all the dimensions of the pad, goUp is false because it doesn’t move at first and the same out goDown.
var leftPad = {
	xPos: 4,
	yPos: 220,
	width: 20,
	height: 80,
	goUp: false,
	goDown: false,
	
	
// This is the move the function, it takes the key inputs and changes the x and y positions accordingly.
	move: function() {
		if (this.goUp && this.yPos <= 410) {
			this.yPos = this.yPos += 10;
		}
		if (this.goDown && this.yPos >= 10) {
			this.yPos -= 10;

		}
		

	},
		// all of the code above pretty much was the same but for the right paddle.
	draw: function() {
		ctx.beginPath();
		ctx.rect(this.xPos, this.yPos, this.width, this.height);
		ctx.stroke();
	}

};

//This var creates the right paddle, the position of it on the canvas, the dimensions, and its movement which is none
var rightPad = {
	xPos: 475,
	yPos: 220,
	width: 20,
	height: 80,
	goUp: false,
	goDown: false,
// This is the move the function, it takes the key inputs and changes the x and y positions accordingly.
	move: function() {
		if (this.goUp && this.yPos <= 410) {
			this.yPos = this.yPos += 10;
		}
		if (this.goDown && this.yPos >= 10) {
			this.yPos -= 10;


		}
	},
	draw: function() {
		ctx.beginPath();
		ctx.rect(this.xPos, this.yPos, this.width, this.height);
		ctx.stroke();
	}
};

// this takes in the inputs from the keyboard and moves the paddle accordingly
document.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 83) {
		leftPad.goUp = true;
	}
	if (evt.keyCode === 87) {
		leftPad.goDown = true;
	}
	if (evt.keyCode === 76) {
		rightPad.goUp = true;
	}
	if (evt.keyCode === 79) {
		rightPad.goDown = true;
	}
});

// when you press up it makes it so that you can’t go down at the same time and vice versa.
document.addEventListener("keyup", function(evt) {
	if (evt.keyCode === 83) {
		leftPad.goUp = false;
	}
	if (evt.keyCode === 87) {
		leftPad.goDown = false;
	}

	if (evt.keyCode === 76) {
		rightPad.goUp = false;
	}
	if (evt.keyCode === 79) {
		rightPad.goDown = false;
	}
});




function gameLoop() {
	ctx.beginPath();
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	leftPad.move();
	leftPad.draw();
	rightPad.move();
	rightPad.draw();
	ball.move();
	ball.draw();
	window.requestAnimationFrame(gameLoop);
}

// this brings together all the code it take the functions and executes all the code in a certain order. That's why the gameloop is at the bottom.
gameLoop();

