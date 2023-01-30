import {StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import heroImage from '../assets/cloud.jpg';

export default function WeatherSummary() {
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.text}>Good Afternoon</Text>
      <Image source={heroImage} style={styles.hero} />
    <View>
      <Text style={styles.tempConatiner}>46</Text>
      <Text>/33</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        marginTop: 32,
        marginBottom: 12
      },

      tempConatiner: {
        
      },

      heroContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },

      hero: {
        width: '90%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 20,
        resizeMode:'cover'
      },
})