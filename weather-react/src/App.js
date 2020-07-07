import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import coldImg from './assets/cold-bg.jpg';
import warmImg from './assets/warm-bg.jpg';

const StyledApp = styled.div`
  .App {
    background-image: url(${coldImg});
    background-size: cover;
    background-position: bottom;
    transition: 0.4s ease-out;
  }

  main {
    min-height: 100vh;

    //add a dark gradient over the image
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75));
    padding: 25px;

  }

  .App.warm {
    background-image: url(${warmImg});
  }

  // to create whitespace between the data being displayed
  .search-box {
    width: 100%;
    margin: 0 0 75px;
  }

  .search-box .search-bar{
    display: block;
    width: 100%;
    padding: 15px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0 0 16px 16px;
    margin-top: -25px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

    color: #313131;
    font-size: 20px;

    transition: 0.4s ease;
  }

  // When the search bar is in focus, make it brighter
  .search-box .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }

  .location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px rgba(50, 50, 70 , 0.5);
  }

  .location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    font-style: italic;
    text-shadow: 2px 2px rgba(50, 50, 70 , 0.5);
  }

  .weather-box {
    text-align: center;
  }


  .weather-box .temp {
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;

    padding: 15px 25px;

    color: #fff;
    font-size: 102px;
    font-weight: 600;
    text-shadow: 3px 6px rgba(50, 50 , 70, 0.5);
    text-align: center;
    box-shadow: 1.5px 6px rgba(0, 0, 0, 0.2);
  }

  .weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50 , 70, 0.5);
  }


`;

const api = {
  key: "65282aede7b0c19902ebe4af07cf11c5",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter")
    {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <StyledApp>
      <div className={(typeof weather.main != "undefined") ? (weather.main.temp > 16 ? 'App warm' : 'App') : 'App'}>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

            {(typeof weather.main != "undefined") ? (
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>

                  <div className="date">
                    {dateBuilder(new Date())}
                  </div>
                </div>

                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                  </div>
                  <div className="weather">
                    {weather.weather[0].main}
                  </div>
                </div>
              </div>
            ) : ('')}
        </main>
      </div>
    </StyledApp>
  );
}

export default App;
