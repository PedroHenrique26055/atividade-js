function converterParaFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('celsius-fahrenheit').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function converterParaCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('fahrenheit-celsius').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}
