import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootParamsNativeStackTypes from './types/RootParamsNativeStackTypes';

const NativeStack = createNativeStackNavigator<RootParamsNativeStackTypes>();

import WelcomeScreen from './screens/Welcome';
import PasswordScreen from './screens/Password';
import HomeScreen from './screens/Home';



export default function RouterNavigationScreen() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <NativeStack.Screen name="Welcome" component={WelcomeScreen}/>
        <NativeStack.Screen name="Password" component={PasswordScreen}/>
        <NativeStack.Screen name="Home" component={HomeScreen}/>
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}