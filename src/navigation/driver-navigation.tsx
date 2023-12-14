import { createStackNavigator } from '@react-navigation/stack';
import { DriversScreen } from '../screens/drivers/drivers';
import { DriverScreen } from '../screens/driver/driver';
import { RacesScreen } from '../screens/races/races';

export type DriverStackParamList = {
  Drivers: undefined;
  Driver: { id: string };
  Races: { id: string };
};

const Stack = createStackNavigator<DriverStackParamList>();

export function DriverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drivers" component={DriversScreen} />
      <Stack.Screen name="Driver" component={DriverScreen} />
      <Stack.Screen name="Races" component={RacesScreen} />
    </Stack.Navigator>
  );
}