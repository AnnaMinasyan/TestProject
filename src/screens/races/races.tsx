import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { loadRacesById } from '../../store/actions/driver-action';
import { DriverStackParamList } from '../../navigation/driver-navigation';
import { Loading } from '../../components/loading';
import { DiverRace } from '../../components/driver-race';
import { Colors } from '../../assets/colors';

type RacesScreenProp = RouteProp<DriverStackParamList, 'Races'>;

export const RacesScreen: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute<RacesScreenProp>();
  const { id } = route.params;
  const { races } = useSelector(state => state.user)
  React.useEffect(() => {
    dispatch(loadRacesById(id))
  }, [])

  if (!races) {
    return <Loading />
  }
  return (
    <View style={styles.conatiner}>
      <FlatList
        data={races}
        renderItem={({ item }) => <DiverRace race={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary
  },
})