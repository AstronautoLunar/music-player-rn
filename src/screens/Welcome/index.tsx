/**COMPONENTS */
import { Screen, Text } from "./styles";
import { Illustration, Description } from "../../components";
import { IllustrationImage } from "../../svgs";

const WelcomeScreen = () => {
  return (
    <Screen>
      <Illustration
        File={IllustrationImage}
        alt="Ilustração"
      />
      <Description>Escute música sua músicas ou áudios salvos de qualquer lugar através de seu celular</Description>
    </Screen>
  )
};

export default WelcomeScreen;