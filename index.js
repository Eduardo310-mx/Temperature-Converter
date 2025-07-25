function convertToCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}
console.log(convertToCelsius(120)) //48.88~

function describeTemperature(fahrenheit) {
    const celsius = (fahrenheit -32) * 5 / 9;
    if (celsius < 0) {
        return  `The Temperature is ${celsius} celsius, It's very cold, my nose feels like it's about to fall off.`
    } else if (celsius < 20){
        return  `The Temperature is ${celsius} celsius, It's like a cold snap`
    } else if (celsius < 30){
        return  `The Temperature is ${celsius} celsius, It's warm, coming off the ocean`   
    } else if (celsius < 40){
        return  `The Temperature is ${celsius} celsius, It's hot, I'm sweating just thinking about moving.`   
    } else if (celsius >= 40){
        return  `The Temperature is ${celsius} celsius, It's very hot, even the cactus are sweating.`   
    } else {
        return  `The Temperature is ${celsius} celsius, It's like hell out there but with worse Wi-Fi.`   
    }
}

const fahrenheit = prompt();
const description = describeTemperature(fahrenheit);
alert(description);