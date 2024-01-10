let gif;

function preload (){
gif = load image ('assets/PackardGIF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  strokeWeight(1);
  fill ('magenta');
  background ("pink" )
}

function draw() {
 
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

