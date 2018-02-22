//this intrument works as the person types. 
//color when key is pressed is interactive with mouse position. 
//sound and position of rectangle appeared depends on key pressed.


var freqA = 262;
var freqS = 294;
var freqD = 330;
var freqF = 349;

var oscA, oscS, oscD, oscF;

var playing = false;
var osc = null;
var playingA = false;
var	playingS = false;
var	playingD = false;
var	playingF = false;
var sentence = ''; // aj


function setup() {
	
  createCanvas(600,600);
  textAlign(RIGHT); // aj
  textSize(100);
	textStyle(BOLD);
	fill(51);
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

  } 
		 if (key == 'S'||key==','||key=='W'||key=='X'||key=='Y'||key=='H'||key=='N'||key=='P') { // aj
    osc = oscS;
		playingS = true; // aj
		sentence = sentence +key // aj

  } 
		 if (key == 'D'||key=='.'||key=='E'||key=='C'||key=='U'||key=='J'||key=='M') { // aj
    osc = oscD;
		playingD = true; // aj
		sentence = sentence +key // aj
  } 
		 if (key == 'F'||key=='K'||key=='R'||key=='V'||key=='I') { // aj
    osc = oscF;
		playingF = true; // aj
		sentence = sentence +key // aj

  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
		noStroke(); // aj
  }
}

function draw() {
  if (playingA) {
   		rect(0+(width/8)/2, height-(height/3), width/8, height/3); // aj
  } 
	if (playingS) {
   		rect(width/4+(width/8)/2, height-(height/3), width/8, height/3); // aj
  } 
	if (playingD) {
   		rect(width/2+(width/8)/2, height-(height/3), width/8, height/3); // aj
  } 
	if (playingF) {
   		rect(width*3/4+(width/8)/2, height-(height/3), width/8, height/3); // aj
  } 
	if (playingA||playingS||playingD||playingF){
	//	text(sentence, width, 150) // aj
	}
	else {
    background(50+mouseY, 50+mouseX, 100-mouseX)
		text(sentence, width, 150) // aj
	}
}


function keyReleased() {
  var osc;
  if (key == 'A'||key==' '||key=='Q'||key=='Z'||key=='T'||key=='G'||key=='B'||key=='O'||key=='L') { // aj
    osc = oscA;
		playingA = false;
  }   if (key == 'S'||key==','||key=='W'||key=='X'||key=='Y'||key=='H'||key=='N'||key=='P') { // aj
    osc = oscS;
		playingS = false;
  }   if (key == 'D'||key=='.'||key=='E'||key=='C'||key=='U'||key=='J'||key=='M') { // aj
    osc = oscD;
		playingD = false;
  }   if (key == 'F'||key=='K'||key=='R'||key=='V'||key=='I') { // aj
    osc = oscF;
		playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
