const PORT = process.env.PORT || 5000;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION || 'mongodb://127.0.0.1/database';

const TOKEN_KEY = process.env.TOKEN_KEY || 'djghhhhuuwiwuewieuwieuriwu';

const ICONS = [
  '01d.png',
  '02d.png',
  '03d.png',
  '04d.png',
  '09d.png',
  '10d.png',
  '11d.png',
  '13d.png',
  '50d.png',
  '01n.png',
  '02n.png',
  '03n.png',
  '04n.png',
  '09n.png',
  '10n.png',
  '11n.png',
  '13n.png',
  '50n.png',
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
