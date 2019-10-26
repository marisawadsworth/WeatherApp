import React from "react";

const Weather = props => (
    <div>
        { props.city && props.country && <p className="weather__key">Location: { props.city }, { props.country } </p> }
        { props.icon && <img className="weather-icon" src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather-icon" />} 
        { props.temperature && <p className="weather__key"> { props.temperature }°c </p> }
        {/* { props.humidity && <p>Humidity: { props.humidity } </p> } */}
        { props.description && <p className="weather__key">Conditions: { props.description } </p> }
        { props.error && <p> { props.error } </p> }
    </div>
);

export default Weather;