import * as React from 'react'
import { Linking, Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../assets/colors';

type Props = {
  url: string;
  title: string
}

export const LinkButton: React.FC<Props> = ({ title, url }) => {
  const handleOpenLink = () => {
    Linking.openURL(url)
  }

  return (
    <Pressable style={styles.container} onPress={handleOpenLink}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: Colors.blue,
    fontSize: 16
  }
})