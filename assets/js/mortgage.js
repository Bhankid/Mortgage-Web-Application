const slider = document.getElementById('slider');
const currentValueElement = document.getElementById('current-value');

slider.addEventListener('input', (e) => {
  const currentValue = e.target.value;
  const formattedValue = formatValue(currentValue);
  currentValueElement.textContent = `$${formattedValue}`;
});

// Helper function to format the value with commas
function formatValue(value) {
  return value.toLocaleString();
}

// Initialize the current value element with the initial slider value
currentValueElement.textContent = `$${formatValue(slider.value)}`;