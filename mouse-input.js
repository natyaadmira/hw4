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
		playingA = true;
  } else if (key == 'S') {
    osc = oscS;
		words = 'S';
		playingS = true;
  } else if (key == 'D') {
    osc = oscD;
		words = 'D';
		playingD = true;
  } else if (key == 'F') {
    osc = oscF;
		words = 'F';
		playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
		noStroke();
  }
}

function draw() {
  if (playingA) {
			background(200-mouseY, 255-mouseX, 255+mouseX) //aj
   		rect(0, 0, width/4, height);
		  text(words, width / 2, 40); // and these
  } 
	else if (playingS) {
			background(200+mouseX, 255-mouseX, 255-mouseX) //aj	
   		rect(width/4, 0, width/4, height);
			text(words, width / 2, 40); // and these 
  } 
	else if (playingD) {
			background(200-mouseY, 255+mouseX, 255-mouseX) //aj
   		rect(width/2, 0, width/4, height);
			text(words, width / 2, 40); // and these 
  } 
	else if (playingF) {
			background(200+mouseX, 255-mouseX, 255+mouseX) //aj
   		rect(width*3/4, 0, width/4, height);
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
		playingA = false;
		playingS = false;
		playingD = false;
		playingF = false;
  }
}
