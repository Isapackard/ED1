// adding GIF to my grid 

let gif;

function preload (){
gif = load image ('assets/Packard800.gif');
}

function setup() {
	// runs one time
  createCanvas(windowWidth, windowHeight);
    
  
}

function draw() {
// runs in a loop

background ('pink');
 
  var num = 10;// variable for the number of squares
  var sideLen = windowWidth/num;// variable for the side length of each square 
 
  
  for (var y = 0; y < windowHeight; y = y+sideLen) {  //loop to create a row squares   in the y direction
  
    for (var x = 0; x < windowWidth; x = x+sideLen)  {//loop to create a row squares in the x direction}
  
  image (gif, x, y, sideLen, sideLen);
  
    }
  }

} 

function windowResized (){
  resizeCanvas (windowWidth, windowHeight);
}

