import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


export default function Radar() {
  return (
    <View style={{borderRadius: 12}}>
      <Text style={styles.text}>Radar</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }

})