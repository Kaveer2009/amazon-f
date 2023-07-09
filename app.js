function startTimer() {
    var minutes = 2;
    var seconds = 0;
    var display = document.getElementById('timer');

    var timer = setInterval(function() {
      // Update the display with the current time
      display.textContent = minutes + ' minutes ' + seconds + ' seconds';

      // Decrease the seconds
      seconds--;

      // If seconds reach 0, decrease the minutes and reset seconds to 59
      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }

      // If the timer reaches 0, stop the timer
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        display.textContent = 'Time is up!';
      }
    }, 1000);
  }


  document.getElementById("copyButton").addEventListener("click", function() {
    var text = document.getElementById("textToCopy").innerText;
  
    // Create a textarea element to hold the text temporarily
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
  
    // Copy the text from the textarea
    textarea.select();
    document.execCommand("copy");
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
  
    // Change the button text temporarily to indicate successful copy
    var copyButton = document.getElementById("copyButton");
    var originalButtonText = copyButton.innerText;
    copyButton.innerText = "Copied!";
    setTimeout(function() {
      copyButton.innerText = originalButtonText;
    }, 2000);
  });
  