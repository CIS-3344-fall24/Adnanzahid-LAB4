// Function to convert Fahrenheit to Celsius
function fToC(fahrenheit) {
    var cVal =  (fahrenheit - 32) * 5/9;
    document.getElementById('conversion-value').innerHTML = fahrenheit+"°F is equal to " +cVal.toFixed(2)+"°C";
}

