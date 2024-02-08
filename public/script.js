let timerInterval;
let totalTime;

function startTimer() {
  let hours = parseInt(document.getElementById('hours').value) || 0;
  let minutes = parseInt(document.getElementById('minutes').value) || 0;
  let seconds = parseInt(document.getElementById('seconds').value) || 0;
  let milliseconds = parseInt(document.getElementById('milliseconds').value) || 0;

  // Calculate total time in milliseconds
  totalTime = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;

  // Check if any input value is provided
  if (totalTime <= 0) {
    alert("Please provide a valid time.");
    return;
  }

  let timerDisplay = document.getElementById('timer');

  timerInterval = setInterval(function() {
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time\'s up!';
      clearInputs(); // Clear inputs when timer ends
    } else {
      let hoursDisplay = Math.floor(totalTime / 3600000).toString().padStart(2, '0');
      let minutesDisplay = Math.floor((totalTime % 3600000) / 60000).toString().padStart(2, '0');
      let secondsDisplay = Math.floor((totalTime % 60000) / 1000).toString().padStart(2, '0');
      let millisecondsDisplay = (totalTime % 1000).toString().padStart(3, '0');
      timerDisplay.textContent = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}:${millisecondsDisplay}`;
      totalTime -= 10; // Decrease by 10 milliseconds
    }
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = '00:00:00:000';
  totalTime = 0;
  clearInputs();
}

function clearInputs() {
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  document.getElementById('milliseconds').value = '';
}
