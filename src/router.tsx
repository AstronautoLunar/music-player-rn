/**CORE */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**TYPES */
import RootParamsNativeStackTypes from "./types/RootParamsNativeStackTypes";

/**SCREENS */
import WelcomeScreen from "./screens/Welcome";
import PasswordScreen from "./screens/Password";
import HomeScreen from "./screens/Home";
import ConfigPasswordScreen from "./screens/ ConfigPassword";

/**CONTEXTS */
import { usePassword } from "./contexts/PasswordContext";

const NativeStack = createNativeStackNavigator<RootParamsNativeStackTypes>();

export default function RouterNavigationScreen() {
  const { password } = usePassword();

  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade"
        }}
        // initialRouteName={!!password ? 'Home' : 'Welcome'}
        initialRouteName="Home"
      >
        <NativeStack.Screen name="Welcome" component={WelcomeScreen}/>
        <NativeStack.Screen name="Password" component={PasswordScreen}/>
        <NativeStack.Screen name="Home" component={HomeScreen}/>
        <NativeStack.Screen name="ConfigPassword" component={ConfigPasswordScreen}/>
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}