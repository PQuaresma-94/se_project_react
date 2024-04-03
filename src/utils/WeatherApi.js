import { APIkey, latitude, longitude } from "./Constants";
import { processServerResponse } from "./utils";

export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}°F`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}°C`,
    },
  };
  return weather;
};

export const locationData = (data) => {
  return data.name;
};

export const locationWeatherType = (data) => {
  const weatherType = data.weather[0].main;
  return weatherType;
};
