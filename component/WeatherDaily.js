import React from 'react'
import { View } from 'react-native';
import data from '../data';

export const WeatherDaily = () => {
  return (
    <View>
        <Day day={data.daily[0]} />
        <Day day={data.daily[1]} />
        <Day day={data.daily[2]} />
        <Day day={data.daily[3]} />
        <Day day={data.daily[4]} />
    </View>
  )
}
