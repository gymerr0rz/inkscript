import {
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloudy,
  Droplet,
  Droplets,
  LocateIcon,
  RefreshCcw,
  Sun,
} from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SERVER_URL from '../../config/config';

const Weather = () => {
  const [temperature, setTemperature] = useState('0');
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState('00:00');
  const [gps, setGps] = useState<string>('');
  const [clicked, setClicked] = useState(false);

  function getWeatherData() {
    if (!localStorage.getItem('weatherLocation')) {
      setGps('Input a location');
      return;
    }
    const location = localStorage.getItem('weatherLocation');

    axios
      .post(`${SERVER_URL}/user/getWeather`, {
        location,
      })
      .then((response) => {
        const weatherData = response.data;
        setTemperature(weatherData.current.temp_c);
        setStatus(weatherCode(weatherData.current.condition.code));
        setWeather(weatherData.current.condition.text);
        setTime(weatherData.location.localtime);
        setGps(weatherData.location.name + ', ' + weatherData.location.country);
        setClicked(false);
      });

    function weatherCode(code: SVGElement) {
      const weatherStatus = {
        1000: <Sun size={100} />,
        1003: <Cloudy size={100} />,
        1006: <Cloudy size={100} />,
        1009: <Cloudy size={100} />,
        1030: <CloudFog size={100} />,
        1063: <CloudRain size={100} />,
        1066: <CloudSnow size={100} />,
        1069: <CloudSnow size={100} />,
        1072: <CloudSnow size={100} />,
        1087: <CloudLightning size={100} />,
        1114: <CloudSnow size={100} />,
        1117: <CloudSnow size={100} />,
        1135: <CloudFog size={100} />,
        1147: <CloudFog size={100} />,
        1150: <CloudDrizzle size={100} />,
        1153: <CloudDrizzle size={100} />,
        1168: <CloudDrizzle size={100} />,
        1171: <CloudDrizzle size={100} />,
        1180: <Droplet size={100} />,
        1183: <Droplets size={100} />,
        1186: <CloudRain size={100} />,
        1189: <CloudRain size={100} />,
        1192: <CloudRain size={100} />,
        1195: <CloudRain size={100} />,
        1198: <CloudRain size={100} />,
        1201: <CloudRain size={100} />,
        1204: <CloudRain size={100} />,
        1207: <CloudRain size={100} />,
        1210: <CloudSnow size={100} />,
        1213: <CloudSnow size={100} />,
        1216: <CloudSnow size={100} />,
        1219: <CloudSnow size={100} />,
        1222: <CloudSnow size={100} />,
        1225: <CloudSnow size={100} />,
        1237: <CloudSnow size={100} />,
        1240: <CloudRain size={100} />,
        1243: <CloudRain size={100} />,
        1246: <CloudRain size={100} />,
        1249: <CloudRain size={100} />,
        1252: <CloudRain size={100} />,
        1255: <CloudRain size={100} />,
        1258: <CloudRain size={100} />,
        1261: <CloudRain size={100} />,
        1264: <CloudRain size={100} />,
        1273: <CloudLightning size={100} />,
        1276: <CloudLightning size={100} />,
        1279: <CloudLightning size={100} />,
        1282: <CloudLightning size={100} />,
      };

      return weatherStatus[code] || null;
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  function handleClick() {
    if (clicked) {
      return (
        <div className="flex justify-between items-center flex-row rounded-xl bg-black/20 px-5 py-5">
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Paris, France"
            onKeyDown={(e) => {
              e.key === 'Enter' ? getWeatherData() : null;
            }}
            onChange={(e) => {
              localStorage.setItem('weatherLocation', e.target.value);
            }}
          />
        </div>
      );
    } else {
      return (
        <button
          onClick={() => setClicked(true)}
          className="px-5 py-2 bg-main rounded-xl flex justify-center items-center gap-2 font-medium"
        >
          <LocateIcon size={10} /> CHANGE LOCATION
        </button>
      );
    }
  }

  return (
    <div className="min-w-[500px] h-[323px] bg-[#202123] rounded-xl flex flex-col justify-center gap-2 border border-[#2d2d2d]">
      <div className="flex justify-between p-7 items-center text-white">
        {/* Top Part Current Forecast*/}
        <div className="flex flex-row gap-2">
          {status}
          <h1 className="flex gap-1 text-6xl">
            {temperature}
            <b className="text-lg">°C°F</b>
          </h1>
        </div>

        <div className="text-right">
          <h1 className="font-bold text-xl text-white">Weather</h1>
          <div className="text-white/50">
            <p>{time}</p>
            <p>{weather}</p>
            <p>{gps}</p>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center items-center gap-2 px-5">
        {/* <button>
          <LocateIcon size={15} /> CHANGE LOCATION
        </button> */}
        {handleClick()}
        <button
          onClick={getWeatherData}
          className="px-5 py-2 border-main border rounded-xl flex justify-center items-center gap-2 font-medium text-main"
        >
          <RefreshCcw size={15} />
          REFRESH
        </button>
      </div>
    </div>
  );
};

export default Weather;
