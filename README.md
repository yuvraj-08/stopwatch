# STOPWATCH APP
<img src="https://i.ibb.co/Vt91s5N/Stop-Watch-UI.png"  alt="Stopwatch UI">
<p>Check Out <a href="https://yuvraj-08.github.io/stopwatch/">Live Demo</a> Here </p>
<h2>Introducing The Stopwatch App :</h2><p> A powerful time-tracking solution developed solely with vanilla JavaScript. With an elegant design utilizing Bootstrap CSS, this app provides a seamless user experience. Effortlessly track elapsed time with start, stop, and reset functionalities. From its clean interface to precise timekeeping, this app demonstrates the versatility and effectiveness of JavaScript in creating interactive web applications. Whether you need to time your workouts, measure productivity, or manage tasks efficiently, the Stopwatch App offers a reliable and user-friendly solution. Embrace the simplicity and functionality of this stopwatch app today and take control of your time management needs with ease.</p>

<p>In order to create the stopwatch app using vanilla JavaScript, I followed a step-by-step approach. Here's a summary of the steps I took:</p>
<ol>
  <li>HTML Structure: I started by creating the basic structure of the HTML page. I added a container div with a title, display area, and buttons for start,          stop, and reset.
      <img src="https://i.ibb.co/f4tdxbj/Index-File.png"  alt="Stopwatch HTML">
  </li>
  <li>CSS Framework: I used Bootstrap as the CSS framework to style the HTML elements. I included the Bootstrap CSS file in the HTML head section using the           provided CDN link.
     <img src="https://i.ibb.co/8jmzzrB/CSS-Frame-Work.png"  alt="Bootstrap CDN Link">
  </li>
  <li>JavaScript Variables: I declared variables to store references to various HTML elements, such as the display area and buttons.
    <img src="https://i.ibb.co/nfRrcND/Reference-Variables.png"  alt="Reference Variable">
  </li>
  <li>Timer Functionality: I created variables to keep track of the start time, elapsed time, timer interval, and running state of the stopwatch. I also             implemented a function to format the elapsed time into the HH:MM:SS:MM format.
      <img src="https://i.ibb.co/jGc0Z4k/Format-Time.png"  alt="Function To Format Time">
  </li>
  <li>Update Display: I defined a function to update the display area with the current elapsed time. It calculates the time difference between the current time       and the start time and formats it using the formatTime function.
      <img src="https://i.ibb.co/6HbMr66/Update-Display.png"  alt="Update Display Function">
  </li>
  <li>Start Timer: I implemented a function that starts the timer when the "Start" button is clicked. It sets the start time to the current time, starts the         timer interval, and sets the running state to true.
      <img src="https://i.ibb.co/TbbkH82/Start-Timer.png"  alt="Start Timer Function">
  </li>
  <li>Stop Timer: I created a function that stops the timer when the "Stop" button is clicked. It clears the timer interval, calculates the elapsed time by           adding the time difference between the current time and the start time, and sets the running state to false. When the user clicks the "Stop" button, the       current elapsed time of the stopwatch will be stored and displayed as a list item below the stopwatch display area.
      <img src="https://i.ibb.co/Gtyn5cz/Stop-Timer.png"  alt="Stop Timer Function">
  </li>
  <li>Reset Timer: I implemented a function to reset the timer when the "Reset" button is clicked. It clears the timer interval, sets the display area to             "00:00:00:00", resets the elapsed time to 0, and sets the running state to false.
      <br/>
      <img src="https://i.ibb.co/2sG1P99/Reset-Timer.png"  alt="Reset Timer Function">
  </li>
  <li>Event Listeners: I added event listeners to the buttons to trigger the respective functions when clicked.
      <img src="https://i.ibb.co/XLTCS1D/Event-Listeners.png"  alt="Adding Event Listeners Code">
  </li>
  <li>Initialization: Finally, I wrapped the entire JavaScript code inside a window.onload event handler to ensure that the code is executed only after all the       HTML elements are loaded.
      <br/>
      <img src="https://i.ibb.co/Jm4qZT7/Initialization.png"  alt="Initializing window.onload">
  </li>
 </ol>
<p>This approach allowed me to create a functional stopwatch app using vanilla JavaScript, without relying on any external libraries or frameworks for JavaScript.</p>
<br/>
<br/>
<hr>

<h5>Contact Me</h5>
:envelope_with_arrow: Email :-  yuvi1707@hotmail.com
