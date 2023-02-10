    let alarm = new Audio('alarm.wav');
    var timerRunning = false;
    var currentTimer = null;

    
function startTimer(){
    var hourSelect = parseInt(document.getElementById('hour').value);
    var minSelect = parseInt(document.getElementById('min').value); 
    var secSelect = parseInt(document.getElementById('sec').value);

    let startTime = new Date().getTime();
    let time = (1000 * 60 * 60 * hourSelect) + (1000 * 60 * minSelect) + (1000 * secSelect);
    let endTime = startTime + time;
    let currentTime = startTime;
    timerRunning = true;

    function setTimer() {
      if (timerRunning) {
        let timeLeft = endTime - currentTime;

        if(timeLeft > 0){
        let hours = timeLeft / (1000 * 60 * 60); 
        hours = Math.floor(hours); 
        let minutes = Math.floor(timeLeft / (1000 * 60)) % 60 ; 
        let seconds = Math.floor((timeLeft / 1000)) % 60;
        let text = addZeros(hours) + ' : ' + addZeros(minutes) + ' : ' + addZeros(seconds);
        timer.innerHTML = text;
        currentTime += 1000;
      }else{
        alarm.play();
        timer.innerHTML = '00 : 00 : 00';
     } 
    }
    } 
    
    if (currentTimer == null) {
      setTimer()
      currentTimer = setInterval(setTimer, 1000);
    }
}

function addZeros(number) {
    if (number < 10) {
        return "0" + number
    }
    return number
}

function stopTimer() {
  timerRunning = false;
}

function resetTimer() {
  if (currentTimer != null) {
    clearInterval(currentTimer)
    currentTimer = null
  }
  timer.innerHTML = "00 : 00 : 00";
  timerRunning = false;
}
