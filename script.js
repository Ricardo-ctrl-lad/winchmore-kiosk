(() => {
  const clock = document.getElementById('clock');
  const date = document.getElementById('date');

  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  function updateDisplay() {
    const now = new Date();
    clock.textContent = timeFormatter.format(now);
    date.textContent = dateFormatter.format(now);
  }

  updateDisplay();

  // Align updates close to the start of each second, then keep updating.
  const delay = 1000 - (Date.now() % 1000);
  setTimeout(() => {
    updateDisplay();
    setInterval(updateDisplay, 1000);
  }, delay);
})();
