const convertBtn = document.getElementById('convert-btn');
const celsiusInput = document.getElementById('celsius');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = celsiusValue * 9/5 + 32;
    resultElement.textContent = `Result: ${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
  } else {
    resultElement.textContent = 'Please enter a valid number';
  }
});
