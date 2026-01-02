// Conversion constants
const KM_TO_MI = 0.621371;
const MI_TO_KM = 1.60934;

// Get DOM elements
const inputValue = document.getElementById('inputValue');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('resultText');
const radioButtons = document.querySelectorAll('input[name="conversion"]');

// Conversion function
function convert() {
    const value = parseFloat(inputValue.value);
    
    // Validate input
    if (isNaN(value) || inputValue.value.trim() === '') {
        alert('Please enter a valid number');
        return;
    }
    
    // Get selected conversion direction
    let conversionType = 'kmToMi';
    radioButtons.forEach(radio => {
        if (radio.checked) {
            conversionType = radio.value;
        }
    });
    
    // Perform conversion
    let result;
    let resultMessage;
    
    if (conversionType === 'kmToMi') {
        result = value * KM_TO_MI;
        resultMessage = `${value} km = ${result.toFixed(4)} miles`;
    } else {
        result = value * MI_TO_KM;
        resultMessage = `${value} miles = ${result.toFixed(4)} km`;
    }
    
    // Display result
    resultText.textContent = resultMessage;
    resultDiv.classList.remove('hidden');
}

// Event listeners
convertBtn.addEventListener('click', convert);

// Allow Enter key to trigger conversion
inputValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convert();
    }
});

// Hide result when input changes
inputValue.addEventListener('input', () => {
    resultDiv.classList.add('hidden');
});

// Hide result when conversion type changes
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        resultDiv.classList.add('hidden');
    });
});