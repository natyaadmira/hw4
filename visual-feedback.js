
var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;
var words = 'blank' // I added this
var osc = null;
var playingA = false; //aj
var	playingS = false; //aj
var	playingD = false; //aj
var	playingF = false; //aj

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
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
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		words = 'A' // and these 
		playingA = true; //aj
  } else if (key == 'S') {
    osc = oscS;
		words = 'S' // and these 
		playingS = true; //aj
  } else if (key == 'D') {
    osc = oscD;
		words = 'D' // and these 
		playingD = true; //aj
  } else if (key == 'F') {
    osc = oscF;
		words = 'F'
		playingF = true; //aj
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
		noStroke(); //aj //aj
  }
}

function draw() {
  if (playingA) { //aj
			background(200, 255, 255) 
   		rect(0, 0, width/4, height); //aj
		  text(words, width / 2, 40); // and these
  } 
	else if (playingS) { //aj
			background(200, 255, 255)			
   		rect(width/4, 0, width/4, height); //aj
			text(words, width / 2, 40); // and these 
  } 
	else if (playingD) { //aj
			background(200, 255, 255)
   		rect(width/2, 0, width/4, height); //aj
			text(words, width / 2, 40); // and these 
  } 
	else if (playingF) { //aj
			background(200, 255, 255)
   		rect(width*3/4, 0, width/4, height); //aj
			text(words, width / 2, 40); // and these 
  } 
	else {
    background(255, 0, 255);
	text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40)
	}
}


function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
		playingA = false; //aj
		playingS = false; //aj
		playingD = false; //aj
		playingF = false; //aj
  }
}
