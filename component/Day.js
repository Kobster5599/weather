import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ColorConstants } from '../globalStyles';
import Icon from '../weatherIcon';
import { iconList } from '../weatherHelper';



export const Day = ({ day }) => {
  return (
    <View style={styles.container}>
        <Icon name={iconList[800][0]} size={32} color='white' />
        <Text style={styles.temp}>{day.temp.max}</Text>
        <Text style={styles.temp}>{day.temp.min}</Text>
        <Text style={styles.temp}>{day.pop * 100}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '18%',
        backgroundColor: ColorConstants.backgroundDark,
        borderRadius: 5,
        padding: 5,
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    temp: {
        color: 'white',
        fontSize: 16
    }
})