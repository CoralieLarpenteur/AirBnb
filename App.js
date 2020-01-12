/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import LoginScreen from './screens/LoginScreen';
import Login from './screens/Login';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainStackNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  Login: { screen: Login },
}, {
  headerMode: 'screen' // Signifie que le header sera géré au niveau de chaque écran avec la variable statique navigationOptions
}
);
const App = createAppContainer(MainStackNavigator);

export default App;
