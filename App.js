import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import axios from 'axios';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const apiKey = '281bad8cb1885b901a5652a588405af4';
    const { data: { main, weather, name } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    this.setState({ isLoading: false, temp: main.temp, condition: weather[0].main, name, description: weather[0].description });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert('Помилка', err.message);
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoading, temp, condition, name, description } = this.state;
    const temperature = Math.round(temp);

    return (
      isLoading ? <Loading /> : <Weather temperature={temperature} condition={condition} name={name} description={description} />
    )
  }
}
