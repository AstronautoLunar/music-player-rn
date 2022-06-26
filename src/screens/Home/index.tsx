/**CORE */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**SCREENS */
import MusicsScreen from "../Musics";

/**ICONS */
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

/**STYLES */
import colors from "../../styles/colors";

/**COMPONENTS */
import { Switch } from "react-native";
import { ThemeAreaButton } from "./styles";

const BottomTable = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BottomTable.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors['USAFA Blue']
        },
        headerStyle: {
          backgroundColor: colors['Beau Blue']
        },
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: false,
        tabBarStyle: {
          height: 65,
          padding: 6,
          backgroundColor: colors['Beau Blue'],
          borderTopColor: colors['Beau Blue']
        },
        tabBarLabelStyle: {
          paddingBottom: 8
        },
        headerRight: () => (
          <ThemeAreaButton>
            <Feather 
              style={{ marginRight: 8 }} 
              name="sun" 
              size={24} 
              color={colors['USAFA Blue']}
            />
            <Switch/>
          </ThemeAreaButton>
        )
      }}
    >
      <BottomTable.Screen 
        name="Musics" 
        component={MusicsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="file-sound-o" size={size} color={focused ? colors['USAFA Blue'] : colors['Black']} />
          ),
          headerTitle: 'Suas músicas',
          tabBarLabel: 'Músicas'
        }}
      />
    </BottomTable.Navigator>
  )
};

export default HomeScreen;