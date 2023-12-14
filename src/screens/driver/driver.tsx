import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { loadDriverById } from '../../store/actions/driver-action';
import { DriverStackParamList } from '../../navigation/driver-navigation';
import { Loading } from '../../components/loading';
import { LinkButton } from '../../components/link-button';
import { Colors } from '../../assets/colors';

type DriverScreenRouteProp = RouteProp<DriverStackParamList, 'Driver'>;

export const DriverScreen: React.FC = () => {
  const dispatch = useDispatch()
  const route = useRoute<DriverScreenRouteProp>();
  const { id } = route.params;
  const { driver } = useSelector(state => state.user)
  React.useEffect(() => {
    dispatch(loadDriverById(id))
  }, [])

  if (!driver) {
    return <Loading />
  }
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{driver.familyName} {driver.givenName}</Text>
      <View style={styles.table}>
        <View >
          <Text style={styles.text}>Nationality: </Text>
          <Text style={styles.text}>Birth-Day</Text>
        </View>
        <View >
          <Text style={styles.text}>{driver.nationality} </Text>
          <Text style={styles.text}>{driver.dateOfBirth}</Text>
        </View>
      </View>
      <LinkButton title='More about Driver' url={driver.url} />
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  },
  table: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 18,
    paddingVertical: 10
  }
})