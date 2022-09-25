import { useEffect, useState } from "react";
import { generatePath } from "react-router-dom";

const Weather = () => {
  const [search, setsearch] = useState("Delhi");
  const [tem, settem] = useState(0);

  useEffect(() => {
    fetchApi();
  }, [search]);

  const fetchApi = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7201508df9ee42610483a8b7a420d083`
    );

    let data = await response.json();
    settem(data);
  };
  if (tem.cod == 200) {
    let abc = tem.weather[0].icon;
    let x = "https://openweathermap.org/img/wn/:icon@2x.png";
    let link = generatePath(x, { icon: abc });
    console.log(link);

    return (
      <div className="box">
        <input
          type="search"
          className="search"
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        <div className="info">
          <p>
            {tem.name}, {tem.sys.country}
          </p>
          <img src={link} />
        </div>
        <div className="tempreture">
          <h2>{(tem.main.temp - 273.15).toFixed(2)} &#8451;</h2>
        </div>
        <div className="tempreture">
          <p>
            Min: {(tem.main.temp_min - 273.15).toFixed(2)} &#8451; <br />
            Max: {(tem.main.temp_max - 273.15).toFixed(2)} &#8451;
          </p>
          <p>Humidity: {tem.main.humidity}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box">
        <input
          type="search"
          className="search"
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        <div className="info">
          <p>{search}</p>
        </div>
        <div className="tempreture">
          <h1>City not found</h1>
        </div>
      </div>
    );
  }
};
export default Weather;
