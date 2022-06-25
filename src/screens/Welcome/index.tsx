import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

import RootParamsNativeStackTypes from "../../types/RootParamsNativeStackTypes";

/**COMPONENTS */
import { Screen } from "./styles";
import { 
  Illustration, 
  Description, 
  ButtonNavigate 
} from "../../components";
import { IllustrationImage } from "../../svgs";

type WelcomeNavigationType = NavigationProp<RootParamsNativeStackTypes, "Welcome">; 

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeNavigationType>();

  function nextScreen() {
    navigation.navigate('Password');
  }

  return (
    <Screen>
      <Illustration
        style={{
          marginTop: 24
        }}
        File={IllustrationImage}
        width={250}
        height={250}
        alt="Ilustração"
      />
      <Description>Escute suas músicas ou áudios salvos de qualquer lugar através de seu celular</Description>
      <ButtonNavigate 
        nameTheme="CTA"
        onPress={nextScreen}
      >
        Entrar
      </ButtonNavigate>
    </Screen>
  )
};

export default WelcomeScreen;