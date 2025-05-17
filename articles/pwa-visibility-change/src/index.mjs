

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
  logContainer.innerHTML += `<p>${logEntry.timestamp} - ${logEntry.visibilityState}</p>`;
}
document.addEventListener('visibilitychange', handleVisibilityChange);

clearLogButton.addEventListener('click', () => {
  localStorage.removeItem('visibilityChangeLog');
  document.getElementById('log').innerHTML = '';
  logContainer.innerHTML = '<p>Log cleared</p>';
});
