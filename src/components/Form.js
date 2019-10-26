import React from "react";


const Form = props => (
    // <form onSubmit={props.getWeather && props.fetchImages}>
    <form onSubmit={props.getWeather}>
        <input className="weather-input" type="text" name="city" placeholder="City..."/>
        <input className="weather-input" type="text" name="country" placeholder="Country..."/>
        <button className="weather-input-button" >Get Weather</button>
    </form>
);

export default Form;
