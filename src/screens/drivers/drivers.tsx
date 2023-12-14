import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loadDrivers } from '../../store/actions/driver-action';
import { IDriver } from '../../store/reducers/types';
import { DriverStackParamList } from '../../navigation/driver-navigation';
import { DriverInfo } from '../../components/driver-info';

type Props = NativeStackScreenProps<DriverStackParamList, 'Drivers'>;

export const DriversScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Props>()
  const { drivers } = useSelector(state => state.user)
  React.useEffect(() => {
    dispatch(loadDrivers())
  }, [])
  const handleNavigateDriver = (driverId: string) => {
    navigation.navigate('Driver', { id: driverId })
  }
  const handleNavigateRaces = (driverId: string) => {
    navigation.navigate('Races', { id: driverId })
  }
  const Item = ({ data, index }: { data: IDriver, index: number }) => (
    <DriverInfo
      key={index}
      driver={data}
      onPressName={handleNavigateDriver}
      onPressRace={handleNavigateRaces} />
  );

  return (
    <View style={styles.conatiner}>
      <FlatList
        data={drivers}
        renderItem={({ item, index }) => <Item data={item} index={index} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 24
  },
})