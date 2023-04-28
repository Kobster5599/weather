import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { DetailTile } from './DetailTile'

// import data from '../data'

export default function WeatherDetail({data}) {
  return (
    <View>
      <Text style={styles.text}>Current</Text>
      <View style={styles.detailContainer}>
        <DetailTile iconName="wi-thermometer" title="Current Temp" data={data.current.temp}  />
        <DetailTile iconName="wi-thermometer" title="Feels Like" data={data.current.feels_like} />
        <DetailTile iconName="wi-sunrise" title="Sunrise" data={data.current.sunrise}  />
        <DetailTile iconName="wi-sunset" title="Sunset" data={data.current.sunset}  />
        <DetailTile iconName="wi-humidity" title="Humidity" data={data.current.humidity}  />
        <DetailTile iconName="wi-windy" title="Wind" data={data.current.wind_speed}  />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    detailContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }

})