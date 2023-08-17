function convert(unit) {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const result = document.getElementById("result");
  
    let celsius, fahrenheit;
  
    if (unit === 'celsius') {
      celsius = parseFloat(celsiusInput.value);
      fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      result.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
      fahrenheit = parseFloat(fahrenheitInput.value);
      celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      result.textContent = `${fahrenheit.toFixed(2)}°F is ${celsius.toFixed(2)}°C`;
    }
  }