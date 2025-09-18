const today = new Date();

const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");
const copyright = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const getDigits = (value) => {
    return value.toString().match(/\d+/g).join('');
}

const getLetters = (value) => {
    return value.toString().match(/[a-zA-Z]+/g).join('');
}

const calculateWindChillCelsius = (temperature, windSpeed) => {
    // Ensure wind chill is only calculated for valid conditions
    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2); // Round to 2 decimal places
}

const calculateWindChillFahrenheit  = (temperature, windSpeed) => {
    // Ensure wind chill is only calculated for valid conditions
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2); // Round to 2 decimal places
};

const getWindChill = (temperature, windSpeed) => {
    let _temperature = getDigits(temperature);
    let _windSpeed = getDigits(windSpeed);
    let _metric = getLetters(temperature);

    if (_temperature <= 10 && _windSpeed > 4.8 && _metric.toLowerCase() === "c") {
        return calculateWindChillCelsius(_temperature, _windSpeed);
    } else if (_temperature <= 50 && _windSpeed > 3 && _metric.toLowerCase() === "f") {
        return calculateWindChillFahrenheit(_temperature, _windSpeed);
    }

    return "N/A"; // Wind chill is not applicable
};


windChill.innerHTML = getWindChill(temperature.innerHTML, windSpeed.innerHTML);
copyright.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;
