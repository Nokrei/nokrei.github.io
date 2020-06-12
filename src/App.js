import React from 'react';
import WeatherContainer from './components/WeatherContainer';
import WeatherCard from './components/WeatherCard';
import './';
import SearchBar from './components/SearchBar';

const App = () => {
  return  <div><SearchBar /> <WeatherContainer /></div>;
};

export default App;
