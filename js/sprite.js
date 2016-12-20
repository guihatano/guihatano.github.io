function Sprite(img) {
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	
	//Origin of the image (in spritesheet)
	this.srcX = this.srcY = 0;
	//Position in canvas where the figure will be shown
	this.posX = this.posY = 0;
	this.width = 32;
	this.height = 48;
	this.speed = 0; //not moving
	this.img = img;
	this.countAnim = 0;

	//Methods *****************
	//Draw the figure
	this.draw = function(ctx) {
		ctx.drawImage(	this.img,	 //Image provided
						//Capture of image in the spritesheet
						this.srcX,	 //Starting X
						this.srcY,	 //Starting Y
						this.width,	 //Width of the image to show
						this.height, //Height of the image to show
						//Image to show
						this.posX,	 //Position X in canvas 
						this.posY,	 //Position Y in canvas 
						this.width,	 //Width of the image to show 
						this.height	 //Height of the image to show 
					);
		this.animation();
	}

	//Move the figure
	this.move = function() {
		if(this.mvRight) {
			this.posX += this.speed;
			this.srcY = this.height * 2; 
		} else
		if(this.mvLeft) {
			this.posX -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(this.mvUp) {
			this.posY -= this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.mvDown) {
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}
	}
	
	//Animate the figure
	this.animation = function() {
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown) {
			//Case an arrow is pressed, the animation counter will be incremented
			this.countAnim++;
			if(this.countAnim >= 40) {
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 10) * this.width;
		} else {
			//Case no key is pressed, the animation counter will be zero and the idle character will be shown
			this.srcX = 0;
			this.countAnim = 0;
		}
	}
}
