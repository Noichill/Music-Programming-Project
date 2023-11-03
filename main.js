let song, analyzer;
let mic, fft;

var button;
var volhistory = [];

function preload() {
  soundFormats('mp3');
  song = loadSound('./TR-song.mp3');
}

function mouseClicked(){
    if (song.isPlaying()){
      song.pause();
      noLoop();
    }
    else {
      song.play();
      loop();
    }
}

function setup() {
  createCanvas(600, 600);
  frameRate(25);
  fft = new p5.FFT();
  angleMode(DEGREES);
   //this will have to change depending on user's track=

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  // button = createButton('toggle');
  // button.position(150, 200); 
  // button.mousePressed(toggleSong);
  //create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  
  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}
// function touchStarted() {
//     if (getAudioContext().state !== 'running') {
//         getAudioContext().resume();
//     }
//     // var synth = new p5.MonoSynth();
//     // synth.play('A4', 0.5, 0, 0.2);
// }

function draw() {
  // if (getAudioContext().state !== 'running') {
  //   text('click to start audio', width/2, height/2);
  // } else {
  //   text('audio is enabled', width/2, height/2);
  // }
  
  background(0);
  // Get the average (root mean square) amplitude
  //let rms = analyzer.getLevel();
  //fill(r, g, b, 127);
  //stroke(0);
  stroke(255,0,0);
  noFill();
  var wave = fft.waveform();

  translate(width/2,height/2)

  beginShape();
  for(var i = 0 ; i <= 180 ; i++){
    var index = floor(map(i, 0, width, 0, wave.length));

    var r = map(wave[index], -1, 1, 150,350);

    var x = r * sin(i);
    var y = r * cos(i);
    vertex (x,y)
  }
  endShape();

  beginShape();
  for(var i = 0 ; i <= 180 ; i++){
    var index = floor(map(i, 0, width, 0, wave.length));

    var r = map(wave[index], -1, 1, 150,350);

    var x = r * -sin(i);
    var y = r * cos(i);
    vertex (x,y)
  }
  endShape();
  // Draw an ellipse with size based on volume
  //ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
  //let spectrum = fft.analyze();

  // beginShape();
  // for(var i = 0 ; i > volhistory.length; i++){
  //   var y = map(volhistory[i],0,1,height/2,0);
  //   vertex(i,y);
  // }
  // endShape();
  // // for (i = 0; i < spectrum.length; i++) {
  // //   vertex(i, map(spectrum[i], 0, 255, height, 0));
  // // }
  // if(volhistory.length > width){
  //   volhistory.splice(0,1);
  // }
}