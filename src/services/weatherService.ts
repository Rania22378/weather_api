import { faker } from "@faker-js/faker";
import { storeWeatherData } from "../helpers/helper.js";


export const generateLondonWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "London",

    temperature: faker.number.int({ min: -15, max: 30 }),

    humidity: faker.number.int({ min: 79, max: 86 }),

    wind: faker.number.int({ min: 2, max: 78 }),

    rain: faker.number.int({ min: 65, max: 75 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};
 
export const generateDublinWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "Dublin",

    temperature: faker.number.int({ min: -15, max: 30 }),

    humidity: faker.number.int({ min: 79, max: 86 }),

    wind: faker.number.int({ min: 2, max: 78 }),

    rain: faker.number.int({ min: 65, max: 75 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};
 
export const generateRomeWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "Rome",

    temperature: faker.number.int({ min: -15, max: 30 }),

    humidity: faker.number.int({ min: 79, max: 86 }),

    wind: faker.number.int({ min: 2, max: 78 }),

    rain: faker.number.int({ min: 65, max: 75 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};
 
export const generateRiyadhWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "Riyadh",

    temperature: faker.number.int({ min: -15, max: 30 }),

    humidity: faker.number.int({ min: 79, max: 86 }),

    wind: faker.number.int({ min: 2, max: 78 }),

    rain: faker.number.int({ min: 65, max: 75 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};

export const generateNewYorkWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "NewYork",

    temperature: faker.number.int({ min: -10, max: 20 }),

    humidity: faker.number.int({ min: 75, max: 80 }),

    wind: faker.number.int({ min: 4, max: 79 }),

    rain: faker.number.int({ min: 68, max: 70}),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};

export const generateLosAnglesWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "LosAngles",

    temperature: faker.number.int({ min: -11, max: 28}),

    humidity: faker.number.int({ min: 74, max: 80 }),

    wind: faker.number.int({ min: 5, max: 69}),

    rain: faker.number.int({ min: 64, max: 74 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};

export const generateMiamiWeatherData = (): WeatherData => {

  const generatedWeatherData: WeatherData = {

    city: "Miami",

    temperature: faker.number.int({ min: -11, max: 29}),

    humidity: faker.number.int({ min: 72, max: 84}),

    wind: faker.number.int({ min: 4, max: 70 }),

    rain: faker.number.int({ min: 60, max: 70 }),

  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);

  return generatedWeatherData;

};
