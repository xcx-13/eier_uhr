// Globale variablen
//----------------------------------------------------------------------------------------------------------------------
document.getElementById("stop-button").disabled = true;
timeraktiv = false;

//------------------------------------------------Menu Icon----------------------------------------------------------------
function openNav() {
  if(!timeraktiv){
  document.getElementById("mySidenav").style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//----------------------------------------------------------------------------------------------------------------
function showSoft() {
  document.getElementById('normalEgg').style.display = "none";
  document.getElementById('softEgg').style.display= "block";
  document.getElementById('softAsWaxEgg').style.display= "none";
  document.getElementById('hardEgg').style.display= "none";
  document.getElementById('table').style.display= "none";
  document.getElementById('timerButtons').style.display= "block";
  timer.innerText = "04 : 00"
  sec = 60;
  min = 4;
  closeNav();
  }

function showSoftAsWax() {
  document.getElementById('normalEgg').style.display = "none";
  document.getElementById('softEgg').style.display= "none";
  document.getElementById('softAsWaxEgg').style.display= "block";
  document.getElementById('table').style.display= "none";
  document.getElementById('hardEgg').style.display= "none";
  document.getElementById('timerButtons').style.display= "block";
  timer.innerText = "06 : 00"
  sec = 60;
  min = 6;
  closeNav();
  }

function showHard() {
  document.getElementById('normalEgg').style.display = "none";
  document.getElementById('softEgg').style.display= "none";
  document.getElementById('softAsWaxEgg').style.display= "none";
  document.getElementById('hardEgg').style.display= "block";
  document.getElementById('table').style.display= "none";
  document.getElementById('timerButtons').style.display= "block";
  timer.innerText = "10 : 00"
  sec = 60;
  min = 10;
  closeNav();
  }

function showTable() {
  document.getElementById('normalEgg').style.display = "none";
  document.getElementById('softEgg').style.display= "none";
  document.getElementById('softAsWaxEgg').style.display= "none";
  document.getElementById('hardEgg').style.display= "none";
  document.getElementById('table').style.display= "block";
  document.getElementById('timerButtons').style.display= "none";
  closeNav();
  }

//---------------------------------------Start Timer Egg----------------------------------------------------------------------
function setTimer(){
 // urlpruefen();
  if(!timeraktiv){
    let startTime = new Date().getTime();
    let selectTime = 1000 * sec * min ;
    let endTime = startTime + selectTime;

  setInterval(function(){
    let timeLeft = endTime - new Date().getTime();
    if(timeLeft > 0){
      let minutes = timeLeft / (1000 * 60);
      minutes = Math.floor(minutes);
      let seconds = (timeLeft / 1000) % 60;
      seconds = Math.round(seconds);
      seconds = ('0' + seconds).slice(-2);
      let text = '0' + minutes + ' : ' + seconds;
      timer.innerText = text;
    }

    else{
    timer.innerText = '00 : 00';
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('C7', '8n');
    }
  }, 1000);
  document.getElementById("play-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
  }
timeraktiv = true;
}

//---------------------------------------set Timeout----------------------------------------------------------------------
function setTimeout() {
  document.getElementById('timer').style.display = "none";
  timer.innerText = "10 : 00"
  sec = 60;
  min = 10;
  }
//---------------------------------------Stop Timer----------------------------------------------------------------------

function stopTimer(){
  window.location.reload(false);
}

//---------------------------------------let time----------------------------------------------------------------------

function letTime(){
  
}