import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { IRace } from '../store/reducers/types';
import { Colors } from '../assets/colors';

type Props = {
  race: IRace
}

export const DiverRace: React.FC<Props> = ({ race }) => {
  return (
    <View style={styles.conatiner}>
      <View>
        <Text>RaceName: </Text>
        <Text>CircuitName: </Text>
        <Text>Date: </Text>
        <Text>Round: </Text>
        <Text>Season: </Text>
      </View>
      <View>
        <Text>{race.raceName}</Text>
        <Text>{race.Circuit.circuitName}</Text>
        <Text>{race.date}</Text>
        <Text>{race.round}</Text>
        <Text>{race.season}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 24,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginBottom: 15
  },
})