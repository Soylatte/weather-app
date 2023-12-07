import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');

 const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=18e223077337135dae9e1d2c9296858b'

 const searchLocation = (event) => {

  if (event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })

  }
 }


  return (
  <div className="app">
    <div className="search">
      <input value={location}
      onChange={event => setLocation(event.target.value)}
      placeholder='Enter Location'
      onKeyDown={searchLocation}
      type='text'>
      </input>
    </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Seoul</p>
          </div>
          <div className="temp">
            <h1>11℃</h1>
            </div>
            <div className="description">
              <p>Sunny</p>
              </div>
              <div className="bottom">
                <div className="feels">
                  <p className='bold'>8℃</p>
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  <p>57%</p>
                  <p>Humidity</p>
                  </div>
                  <div className="wind">
                    <p className='bold'>12 MPH</p>
                    <p>Wind Speed</p>
                  </div>

              </div>

      </div>

    </div>
    </div>
  );
}

export default App;
