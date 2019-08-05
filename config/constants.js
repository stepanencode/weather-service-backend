const PORT = process.env.PORT || 5000;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION || 'mongodb://127.0.0.1/database';

const TOKEN_KEY = process.env.TOKEN_KEY || 'djghhhhuuwiwuewieuwieuriwu';

const ICONS = [
  '01d',
  '02d',
  '03d',
  '04d',
  '09d',
  '10d',
  '11d',
  '13d',
  '50d',
  '01n',
  '02n',
  '03n',
  '04n',
  '09n',
  '10n',
  '11n',
  '13n',
  '50n',
];

 const CONDITIONS = [
  'Thunderstorm',
  'Drizzle',
  'Rain',
  'Snow',
  'Mist',
  'Smoke',
  'Haze',
  'Dust',
  'Fog',
  'Sand',
  'Ash',
  'Squall',
  'Tornado',
  'Clear',
  'Clouds'
];

module.exports = { PORT, MONGODB_CONNECTION, TOKEN_KEY, ICONS, CONDITIONS };
