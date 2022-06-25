/**COMPONENTS */
import { Screen, Text } from "./styles";
import { 
  Illustration, 
  Description, 
  ButtonNavigate 
} from "../../components";
import { IllustrationImage } from "../../svgs";

const WelcomeScreen = () => {
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
      <ButtonNavigate onPress={() => {
        console.log("entrou")
      }}>Entrar</ButtonNavigate>
    </Screen>
  )
};

export default WelcomeScreen;