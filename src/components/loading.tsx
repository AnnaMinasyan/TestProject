import * as React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../assets/colors';

export const Loading: React.FC = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
})