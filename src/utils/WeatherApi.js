import { APIkey, latitude, longitude } from "./Constants"

export const getForcastWeather = () => {
  const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else { 
          Promise.reject(`Error: ${res.status}`);
        }
      });
      return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {  
    temperature: {
      F: `${Math.round(temperature)}°F`, 
      C: `${Math.round((temperature - 32) * 5/9)}°C`
    }
  };
  console.log(weather);
  return weather;
}

export const locationData = (data) => {
  return data.name;
}
