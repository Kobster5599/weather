import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

import Icon from './weatherIcon';

import WeatherDetail from './component/WeatherDetail';
import WeatherHourly from './component/WeatherHourly';
import WeatherSummary from './component/WeatherSummary';

export default function App() {

  const [loaded] = useFonts(
    { icomoon: require('./assets/fonts/icomoon.ttf'), }
  );

  if(!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>

      <WeatherSummary/>

      <Icon name="wi-cloudy-gusts"  style={styles.icon}/>


      <WeatherDetail/>


      <WeatherHourly/>

      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
   //justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  icon: {
    color: 'lightblue',
    fontSize: 74
  }
});
