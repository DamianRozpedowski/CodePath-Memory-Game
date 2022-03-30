// global constants
var clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 200; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
const roundCounter = document.getElementById("roundTracker");
const highScoreText = document.getElementById("highScoreText");
const speedScoreText = document.getElementById("speedScoreText");
const strikeScoreText = document.getElementById("strikeScoreText");

//Global Variables
var pattern = [];
var endlessPattern = [];
var speedPattern = [];
var strikePattern = [];
var progress = 0; 
var highScore = 0;
var speedhs = 0;
var strikehs= 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1;  //must be between 0.0 and 1.0
var guessCounter = 0;
var normalGamePlaying = false;
var endlessGamePlaying = false;
var speedGamePlaying = false;
var strikeGamePlaying = false;
var mistakes = 0;

//Preset
roundCounter.innerText = progress;
highScoreText.innerText = highScore;
speedScoreText.innerText = speedhs; 
strikeScoreText.innerText = strikehs; 

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function loseGame(){
  clueHoldTime = 500; //reset hold time
  if(normalGamePlaying)
    stopGame();
  else if(endlessGamePlaying)
    stopEndlessGame();
    else if(speedGamePlaying)
    stopSpeedGame();
    else if(strikeGamePlaying)
    stopStrikeGame();
  alert("Game Over. You lost.");
}

function winGame(){
  clueHoldTime = 500; //reset hold time
  stopGame();
  alert("Game Over. You win!");
  
}

//Function to change button color
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Standard Game -------------------------------------

function startGame(){
    if(gamePlaying) return;
    //initialize game variables
    progress = 0;
    pattern = [];
    gamePlaying = true;
    normalGamePlaying = true; //Used to determine in guess function what mode is being played
    roundCounter.innerText = progress+1;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    normalGamePlaying = false;
   progress = 0;
  roundCounter.innerText = progress;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function playClueSequence(){
  guessCounter = 0;
  pattern.push(randomNumber(1,4));
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// Endless Game--------------------------------------------

function endlessGame(){
    if(gamePlaying) return;
    progress = 0;
    endlessPattern=[];
    gamePlaying = true;
    endlessGamePlaying = true; //Used to determine in guess function what mode is being played
    roundCounter.innerText = progress+1;
    highScoreText.innerText = highScore; // High Score Updater
    // swap the Start and Stop buttons
    document.getElementById("endlessBtn").classList.add("hidden");
    document.getElementById("stopEndlessBtn").classList.remove("hidden");
    playEndlessClueSequence();
}

function stopEndlessGame(){
    //initialize game variables
    gamePlaying = false;
    endlessGamePlaying = false;
   progress = 0;
  roundCounter.innerText = progress;
  
    // swap the Start and Stop buttons
    document.getElementById("endlessBtn").classList.remove("hidden");
    document.getElementById("stopEndlessBtn").classList.add("hidden");
}

function playEndlessClueSequence(){
  guessCounter = 0;
  endlessPattern.push(randomNumber(1,4));
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + endlessPattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,endlessPattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


// Speed Game----------------------------------------------


function speedGame(){
    if(gamePlaying) return;
    speedPattern=[];
    gamePlaying = true;
    speedGamePlaying = true; //Used to determine in guess function what mode is being played
    roundCounter.innerText = progress+1;
    speedScoreText.innerText = speedhs; // High Score Updater
    // swap the Start and Stop buttons
    document.getElementById("speedBtn").classList.add("hidden");
    document.getElementById("stopSpeedBtn").classList.remove("hidden");
    playSpeedClueSequence();
}

function stopSpeedGame(){
    //initialize game variables
    gamePlaying = false;
    speedGamePlaying = false;
    progress = 0;
    roundCounter.innerText = progress;
  
    // swap the Start and Stop buttons
    document.getElementById("speedBtn").classList.remove("hidden");
    document.getElementById("stopSpeedBtn").classList.add("hidden");
}

function playSpeedClueSequence(){
  guessCounter = 0;
  speedPattern.push(randomNumber(1,4));
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + speedPattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,speedPattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// Strike Game---------------------------------------------------------

function strikeGame(){
  if(gamePlaying) return;
    mistakes = 0;
    progress = 0;
    strikePattern=[];
    gamePlaying = true;
    strikeGamePlaying = true; //Used to determine in guess function what mode is being played
    roundCounter.innerText = progress+1;
    strikeScoreText.innerText = strikehs; // High Score Updater
    // swap the Start and Stop buttons
    document.getElementById("strikeBtn").classList.add("hidden");
    document.getElementById("stopStrikeBtn").classList.remove("hidden");
    playStrikeClueSequence();
}


function stopStrikeGame(){
    //initialize game variables
    gamePlaying = false;
    strikeGamePlaying = false;
   progress = 0;
  roundCounter.innerText = progress;
  
    // swap the Start and Stop buttons
    document.getElementById("strikeBtn").classList.remove("hidden");
    document.getElementById("stopStrikeBtn").classList.add("hidden");
}


function playStrikeClueSequence(){
  guessCounter = 0;
  strikePattern.push(randomNumber(1,4));
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + strikePattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,strikePattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}



// Guess function for every type of gamemode -----------------------------------
function guess(btn){
  if(normalGamePlaying){
    console.log("user guessed: " + btn);
    if(!gamePlaying){
      return;
    }
    if(pattern[guessCounter] == btn){
      if(guessCounter == progress){
          progress++;
          roundCounter.innerText = progress+1; // Displays Round Num
            if(progress == 8){
              winGame();
            }
            playClueSequence();
      }
      else{
        guessCounter++;
      }
    }
    else{
      loseGame();
      stopGame();
    }
  }
  else if (endlessGamePlaying){
    console.log("user guessed: " + btn);
    if(!gamePlaying){
      return;
    }
    if(endlessPattern[guessCounter] == btn){ //if button is correctly picked
      if(guessCounter == progress){
          progress++;
          roundCounter.innerText = progress+1; //// Displays Round Num
          if (highScore <= progress){ // Updates High Score Variable if it is lower than the Round Num
              highScore = progress
              highScoreText.innerText = highScore; //High Score Updater
          }
          playEndlessClueSequence();
      }
      else{
        guessCounter++;
      }
    }
    else{ // if button was wrongly chosen
      loseGame();
      stopEndlessGame();
    } 
  }
  else if(speedGamePlaying){
    console.log("user guessed: " + btn);
    if(!gamePlaying){
      return;
    }
    if(speedPattern[guessCounter] == btn){ //if button is correctly picked
      if(guessCounter == progress){
          progress++;
          roundCounter.innerText = progress+1; //// Displays Round Num
          if (speedhs <= progress){ // Updates High Score Variable if it is lower than the Round Num
              speedhs = progress
              speedScoreText.innerText = speedhs; //High Score Updater
          }
          playSpeedClueSequence();
      }
      else{
        guessCounter++;
        if (clueHoldTime > 100)
        clueHoldTime -= 25;
        else 
         clueHoldTime = 100;
      }
    }
    else{ // if button was wrongly chosen
      loseGame();
      stopSpeedGame();
    } 
  }  
  else if(strikeGamePlaying){
    console.log("user guessed: " + btn);
    if(!gamePlaying){
      return;
    }
    if(strikePattern[guessCounter] == btn){ //if button is correctly picked
      if(guessCounter == progress){
          progress++;
          roundCounter.innerText = progress+1; //// Displays Round Num
          if (strikehs <= progress){ // Updates High Score Variable if it is lower than the Round Num
              strikehs = progress
              strikeScoreText.innerText = strikehs; //High Score Updater     
          }
          playStrikeClueSequence();
      }
      else{
        guessCounter++;
      }
    }
    else{ // if button was wrongly chosen
        if(mistakes < 2) {
          mistakes++;  
          alert("Strike # " + mistakes);
          guessCounter++;  // Guess counter is updated so that round number doesnt change
          playStrikeClueSequence();
          roundCounter.innerText = progress+1; //// Displays Round Num   
        }   
        else {
         loseGame();
         stopStrikeGame();
        }
    } 
  }
  
}


// Sound Synthesis Functions --------------------
const freqMap = {
  1: 150.6,
  2: 200.6,
  3: 245,
  4: 300.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



/*
function startTone(btn){
 document.getElementById("sound"+btn).pause();
document.getElementById("sound"+btn).currentTime = 0;
 document.getElementById("sound"+btn).volume = 1;
  document.getElementById("sound"+btn).play();
}

 function stopTone(btn) {
        var mouseDownSound = document.getElementById("sound"+btn);
        mouseDownSound.volume = 1;
     
        var vol = mouseDownSound.volume;
        function fadeOut() { 
            setInterval(
              function() {
                if (vol > 0) {
                  vol -= 0.003;
                  mouseDownSound.volume = vol;
                }
                else {
                  clearInterval(fadeOut);
                  
                 
                }
              }, 2);
        }
        fadeOut(); 
    };

*/
