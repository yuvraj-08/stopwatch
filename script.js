window.onload = function() {
    
    // Variables to store elements
    var display = document.getElementById('display');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    var timeList = document.getElementById('timeList');
    
    // Variables to perform calculations
    var startTime;
    var elapsedTime = 0;
    var timerInterval;
    var running = false;
    
    // Funtion to format time in HH:MM:SS:MM 
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
    
    // Function which upadtes the display time 
    function updateDisplay() {
      var currentTime = new Date().getTime();
      var deltaTime = currentTime - startTime;
      display.textContent = formatTime(elapsedTime + deltaTime);
    }
    
    // Function to control the start button 
    function startTimer() {
      // if the timer is not running it will turn its running state to true 
      if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
      }
    }
    // function to control the stop button
    function stopTimer() {
      // checks if timer is running or not 
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
    

    // Reset the timer all to zero 
    function resetTimer() {
      clearInterval(timerInterval);
      display.textContent = '00:00:00:000';
      elapsedTime = 0;
      running = false;

      // Clear the list of stored times
      timeList.innerHTML = '';

    }
    
    // Calling the above functions when the user clicks any button 
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
  };
  
