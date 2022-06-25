/**CORE */
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**TYPES */
import { NavigationProp } from "@react-navigation/native";
import RootParamsNativeStackTypes from "../../types/RootParamsNativeStackTypes";

/**COMPONENTS */
import { ButtonNavigate, InputPassword, Description } from "../../components";
import { Screen, Container } from "./styles";

/**CONTEXTS */
import { usePassword } from "../../contexts/PasswordContext";
import colors from "../../styles/colors";

type ConfigPasswordNavigationProp = NavigationProp<RootParamsNativeStackTypes, 'ConfigPassword'>;

const ConfigPasswordScreen = () => {
  const navigation = useNavigation<ConfigPasswordNavigationProp>();
  const { password, changePassword } = usePassword();
  
  function nextScreenHome() {
    navigation.navigate("Home");
  }

  function configAndNextHome() {
    if (!password) {
      return Alert.alert('Insira uma senha para configurar');
    }
    navigation.navigate("Home");
  }

  return (
    <Screen>
      <Description
        color={colors['USAFA Blue']}
        style={{
          marginTop: 24
        }}
      >
        Configure sua Senha
      </Description>

      <InputPassword
        value={password}
        onChangeText={changePassword}
      />

      <Container>
        <ButtonNavigate
          nameTheme="Secundary"
          onPress={nextScreenHome}
          style={{
            marginBottom: 8
          }}
        >
          Deixar para depois
        </ButtonNavigate>
        <ButtonNavigate
          nameTheme="CTA"
          onPress={configAndNextHome}
        >
          Configurar
        </ButtonNavigate>
      </Container>
    </Screen>
  )
};

export default ConfigPasswordScreen;