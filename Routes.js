import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import Screen01 from './src/Screen01';
import Screen02 from './src/Screen02';
import Screen03 from './src/Screen03';

const Stack01 = createStackNavigator({
  Screen01: Screen01,
});
const Stack02 = createStackNavigator({
  Screen02: Screen02,
});
const Stack03 = createStackNavigator({
  Screen03: Screen03,
});

const tabNavigator = createBottomTabNavigator({
  Tab01: Stack01,
  Tab02: Stack02,
  Tab03: Stack03,
});

export default createAppContainer(tabNavigator);
