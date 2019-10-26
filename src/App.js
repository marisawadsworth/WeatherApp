import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY_WEATHER = "0b866fdfdf8c38bc4d61a65c2711b0eb";
const API_KEY_PHOTOS = "5f282b6b60ee8b4f9e3ba90f878b1c94983f8dc738913d8d7cb8b24f37b0cdc9";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        images: []
    }
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY_WEATHER}&units=metric`);
        const data = await api_call.json();
        console.log(data)
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                icon: data.weather[0].icon,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                icon: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values."
            });
        }
    }

    fetchImages = async () => {
        let value = (`${this.state.city}, ${this.state.country}`);
        let res = await fetch(`https://api.unsplash.com/search/photos/?per_page=1&query=${value}&client_id=${API_KEY_PHOTOS}`);
        res = await res.json();
        this.setState({
            images: res.results.map(i => i.urls.full)
        });
        
    };

    render() {
        return (
            <div className="wrapper">
            <div className="image">
                <div className="weather-container">
                    <Titles />
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        icon={this.state.icon}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
                    {/* <h1>Photos of the Location</h1> */}
                    <button onClick={this.fetchImages}>Images</button>
                 </div>
                 {/* <div className="image"> */}
                    {this.state.images.map((url, idx) => <img className="background-image" key={idx} src={url} alt="searched item"/>)}
                </div>
            </div>
        );
    }
};

export default App;