window.onload = function() {
    var display = document.getElementById('display');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    var timeList = document.getElementById('timeList');

    var startTime;
    var elapsedTime = 0;
    var timerInterval;
    var running = false;
    
    function formatTime(milliseconds) {
      var hours = Math.floor(milliseconds / 3600000);
      var minutes = Math.floor((milliseconds % 3600000) / 60000);
      var seconds = Math.floor((milliseconds % 60000) / 1000);
      var milliseconds = milliseconds % 1000;
      var formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds;
      return formattedTime;
    }
    
    function updateDisplay() {
      var currentTime = new Date().getTime();
      var deltaTime = currentTime - startTime;
      display.textContent = formatTime(elapsedTime + deltaTime);
    }
    
    function startTimer() {
      if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
      }
    }
    
    function stopTimer() {
       if (running) {
        clearInterval(timerInterval);
        elapsedTime += new Date().getTime() - startTime;
        running = false;
  
        // Store and display the stopped time
        var stopTime = formatTime(elapsedTime);
        var listItem = document.createElement('li');
        listItem.textContent =  stopTime;
        timeList.appendChild(listItem);
    }
    }
    
    function resetTimer() {
      clearInterval(timerInterval);
      display.textContent = '00:00:00:000';
      elapsedTime = 0;
      running = false;

      // Clear the list of stored times
      timeList.innerHTML = '';

    }
    
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
  };
  