window.onload = function() {
	//Constants to store the key codes used
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40, CTRL = 17, ALT = 18;
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/darthvader.png";
	var vader = new Sprite(spriteSheet);
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e) {
		switch(e.keyCode) {
			case RIGHT:
				vader.mvRight = true;
				vader.mvLeft = false;
				vader.mvUp = false;
				vader.mvDown = false;
				break;
			case LEFT:
				vader.mvRight = false;
				vader.mvLeft = true;
				vader.mvUp = false;
				vader.mvDown = false;
				break;
			case UP:
				vader.mvRight = false;
				vader.mvLeft = false;
				vader.mvUp = true;
				vader.mvDown = false;
				break;
			case DOWN:
				vader.mvRight = false;
				vader.mvLeft = false;
				vader.mvUp = false;
				vader.mvDown = true;
				break;
			case (CTRL && ALT):
				init();
				break;
		}
	}
	
	function keyupHandler(e) {
		switch(e.keyCode) {
			case RIGHT:
				vader.mvRight = false;
				break;
			case LEFT:
				vader.mvLeft = false;
				break;
			case UP:
				vader.mvUp = false;
				break;
			case DOWN:
				vader.mvDown = false;
				break;
		}
	}
	
	//When the image is loaded, the animation starts
	//(not in this case but I will leave this here)
	spriteSheet.onload = function() {
		// init();
		vader.posX = cnv.width/2 - vader.width/2;
		vader.posY = cnv.height/2;
	}

	function init() {
		loop();
	}

	function update() {
		vader.move();
	}

	function draw() {
		ctx.clearRect(0,0,cnv.width,cnv.height);
		vader.draw(ctx);
	}

	function loop() {
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}
