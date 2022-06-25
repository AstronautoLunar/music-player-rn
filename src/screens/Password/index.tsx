/**CORE */
import { useNavigation } from "@react-navigation/native";

/**TYPES */
import { NavigationProp } from "@react-navigation/native";
import RootParamsNativeStackTypes from "../../types/RootParamsNativeStackTypes";

/**COMPONENTS */
import { Illustration, ButtonNavigate, Description } from "../../components";
import { Screen, Container } from "./styles";
import { Lock } from "../../svgs";

type PasswordNavigationTypes = NavigationProp<RootParamsNativeStackTypes, 'Password'>;

const PasswordScreen = () => {
  const navigation = useNavigation<PasswordNavigationTypes>();
  
  function nextScreen(screen: keyof RootParamsNativeStackTypes) {
    return () => navigation.navigate(screen);
  }

  return (
    <Screen>
      <Illustration
        File={Lock}
        width={300}
        height={200}
        alt="Cadeado"
        style={{
          marginTop: 24
        }}
      />
      <Description>
        Quer configurar uma senha para entrar no app?
      </Description>
      <Container>
        <ButtonNavigate 
          nameTheme="Secundary"
          style={{ marginBottom: 8 }}
          onPress={nextScreen('Home')}
        >
          Continuar
        </ButtonNavigate>
        <ButtonNavigate
          nameTheme="CTA"
          onPress={nextScreen('ConfigPassword')}
        >
          Configurar Chave
        </ButtonNavigate>
      </Container>
    </Screen>
  )
};

export default PasswordScreen;