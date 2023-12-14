import * as React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IDriver } from '../store/reducers/types';
import { Colors } from '../assets/colors';

type Props = {
  driver: IDriver,
  onPressName: (id: string) => void;
  onPressRace: (id: string) => void;
}

export const DriverInfo: React.FC<Props> = ({ driver, onPressName, onPressRace }) => {
  return (
    <View style={styles.item} >
      <Pressable onPress={() => onPressName(driver.driverId)}>
        <Text style={styles.text}>{driver.familyName} {driver.givenName}</Text>
      </Pressable>
      <Pressable onPress={() => onPressRace(driver.driverId)}>
        <Text style={styles.link}>Get Races</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({

  item: {
    padding: 10,
    marginBottom: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: Colors.dark,
  },
  link: {
    color: Colors.blue,
    textDecorationLine: 'underline',
    marginTop: 10
  }
})