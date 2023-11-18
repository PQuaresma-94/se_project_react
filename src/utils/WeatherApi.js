// if (temperature >= 86) {
//     return 'hot';
//   } else if (temperature >= 66 && temperature <= 85) {
//     return 'warm';
//   } else if (temperature <= 65) {
//     return 'cold';
//   } 


const APIkey = "21f89b5fc71f52a8e6dc6c81dc95cd2b";
const latitude = 44.34;
const longitude = 10.99;

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
  return Math.ceil(temperature);
}