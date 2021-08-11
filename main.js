//Create a reference for canvas 
var canvas = document.getElementById("canvas1");
var pen = canvas.getContext("2d");

//Give specific height and width to the car image
car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x = 50;
car_y = 50;

function add_imgs() {
	console.log("hello");
	//upload car, and background images on the canvas.
	bg_img_tag = new Image();
	bg_img_tag.onload = uploadBackground;
	bg_img_tag.src = background_image;

	car_img_tag = new Image();
	car_img_tag.onload = greencar_image;
	car_img_tag.src = greencar_image;
}

function uploadBackground() {
	console.log("inside uploadBackground");
	//Define function ‘uploadBackground’
	pen.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	console.log("inside uploadgreencar");
	//Define function ‘uploadgreencar’.
	pen.drawImage(car_img_tag, car_x, car_y, car_width, car_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	//Define function to move the car upward
	if (car_y > 0) {
		car_y -= 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	//Define function to move the car downward
	if (car_y < 500) {
		car_y += 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	//Define function to move the car left side
	if (car_x > 0) {
		car_x -= 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	//Define function to move the car right side
	if (car_x < 700) {
		car_x += 10;
		uploadBackground();
		uploadgreencar();
	}
}