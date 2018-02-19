//this intrument works as the person types. 
//color when key is pressed is interactive with mouse position. 
//sound and position of rectangle appeared depends on key pressed.


var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;
var words = 'blank' // I added this
var osc = null;
var playingA = false;
var	playingS = false;
var	playingD = false;
var	playingF = false;
var sentence = ''; // aj


function setup() {
	
  createCanvas(400,300);
  backgroundColor = color(255, 0, 255);
  textAlign(RIGHT); // aj
  textSize(100);
	textStyle(BOLD);
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function keyPressed() {
  var osc;
  if (key == 'A'||key==' '||key=='Q'||key=='Z'||key=='T'||key=='G'||key=='B'||key=='O'||key=='L') { // aj
    osc = oscA;
		playingA = true; // aj
		sentence = sentence +key; // aj
		words = sentence; // aj

  } 
		else if (key == 'S'||key==','||key=='W'||key=='X'||key=='Y'||key=='H'||key=='N'||key=='P') { // aj
    osc = oscS;
		playingS = true; // aj
		sentence = sentence +key // aj
		words = sentence; // aj

  } 
		else if (key == 'D'||key=='.'||key=='E'||key=='C'||key=='U'||key=='J'||key=='M') { // aj
    osc = oscD;
		playingD = true; // aj
		sentence = sentence +key // aj
		words = sentence; // aj
  } 
		else if (key == 'F'||key=='K'||key=='R'||key=='V'||key=='I') { // aj
    osc = oscF;
		playingF = true; // aj
		sentence = sentence +key // aj
		words = sentence; // aj

  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
		noStroke(); // aj
  }
}

function draw() {
  if (playingA) {
			
			background(200-mouseY, 255-mouseX, 255+mouseX) // aj
   		rect(0, 0, width/4, height); // aj
		  text(words, width, 150); // aj
  } 
	else if (playingS) {
			background(200+mouseX, 255-mouseX, 255-mouseX) // aj		
   		rect(width/4, 0, width/4, height); // aj
			text(words, width, 150); // aj
  } 
	else if (playingD) {
			background(200-mouseY, 255+mouseX, 255-mouseX) // aj
   		rect(width/2, 0, width/4, height); // aj
			text(words, width, 150); // aj
  } 
	else if (playingF) {
			background(200+mouseX, 255-mouseX, 255+mouseX) // aj
   		rect(width*3/4, 0, width/4, height); // aj
			text(words, width, 150); // aj
  } 
	else {
    background(255, 0, 255);
	text(sentence, width, 150) // aj
	}
}


function keyReleased() {
  var osc;
  if (key == 'A'||key==' '||key=='Q'||key=='Z'||key=='T'||key=='G'||key=='B'||key=='O'||key=='L') { // aj
    osc = oscA;
  } else if (key == 'S'||key==','||key=='W'||key=='X'||key=='Y'||key=='H'||key=='N'||key=='P') { // aj
    osc = oscS;
  } else if (key == 'D'||key=='.'||key=='E'||key=='C'||key=='U'||key=='J'||key=='M') { // aj
    osc = oscD;
  } else if (key == 'F'||key=='K'||key=='R'||key=='V'||key=='I') { // aj
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
		playingA = false;
		playingS = false;
		playingD = false;
		playingF = false;
  }
}
