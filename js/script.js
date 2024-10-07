const form = document.getElementById('temperature-form');
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const resultDiv = document.getElementById('result');
const calculationDiv = document.getElementById('calculation-steps');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature) || temperature < -273.15 || temperature > 1000) {
        alert('Invalid temperature value. Please enter a number between -273.15 and 1000.');
        return;
    }

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature} °C = ${fahrenheit.toFixed(2)} °F`;
        calculationDiv.textContent = `${temperature}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature} °F = ${celsius.toFixed(2)} °C`;
        calculationDiv.textContent = `(${temperature}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
    }
});