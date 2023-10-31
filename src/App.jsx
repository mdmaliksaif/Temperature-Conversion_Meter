import { useState } from 'react';
import './App.css';
import {LiaTemperatureHighSolid} from 'react-icons/lia'
import {SiGamedeveloper} from 'react-icons/si'
function App() {
  const [Celsius, setCelsius] = useState("0");
  const [Fahrenheit, setFahrenheit] = useState("32");

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setCelsius(celsiusValue);
  };

  return (
    <div className='screen'>
      <div className='developer'><h2 className='txt2'>Made By Sachin & Saif <SiGamedeveloper style={{color:"black",marginBottom:"-4.5px"}}/></h2></div>
      <div className='txt1'>TEMPERATURE CONVERSION
    <LiaTemperatureHighSolid className='temp-logo' />
      </div>
      <div className='converter-box'>
        <div className='value-get'>
          <div>
            <h2 >Celsius</h2>
            <input
              type="text"
              value={Celsius}
              onChange={handleCelsiusChange}
            />
          </div>
          <div>
            <h2>Fahrenheit</h2>
            <input
              type="text"
              value={Fahrenheit}
              onChange={handleFahrenheitChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
