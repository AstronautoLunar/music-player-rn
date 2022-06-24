/**COMPONENTS */
import { Screen, Text } from "./styles";
import { Illustration } from "../../components";
import { IllustrationImage } from "../../svgs";

const WelcomeScreen = () => {
  return (
    <Screen>
      <Illustration
        File={IllustrationImage}
        alt="Ilustração"
      />
    </Screen>
  )
};

export default WelcomeScreen;