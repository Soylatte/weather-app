import React from 'react';
import axios from 'axios';

function App() {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=18e223077337135dae9e1d2c9296858b'
  return (
  <div className="App">
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
                  <p>8℃</p>
                </div>
                <div className="humidity">
                  <p>57%</p>
                  </div>
                  <div className="wind">
                    12 MPH
                  </div>

              </div>

      </div>

    </div>
    </div>
  );
}

export default App;
