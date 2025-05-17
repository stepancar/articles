

const visibilityChangeLog = JSON.parse(localStorage.getItem('visibilityChangeLog')) || [];
const logContainer = document.getElementById('log');
const clearLogButton = document.getElementById('clearLog');

const handleVisibilityChange = () => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    visibilityState: document.visibilityState,
  };
  visibilityChangeLog.push(logEntry);
  localStorage.setItem('visibilityChangeLog', JSON.stringify(visibilityChangeLog));
  displayLog();
}

function displayLog() {
    logContainer.innerHTML = '';
    visibilityChangeLog.forEach(entry => {
        logContainer.innerHTML += `<p>${entry.timestamp} - ${entry.visibilityState}</p>`;
    });
}
document.addEventListener('visibilitychange', handleVisibilityChange);
displayLog();

clearLogButton.addEventListener('click', () => {
  localStorage.removeItem('visibilityChangeLog');
  document.getElementById('log').innerHTML = '';
});
