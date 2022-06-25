/**CORE */
import styled from "styled-components/native";

/**COMPONENTS */
import { TextInput, Animated } from "react-native";

/**STYLES */
import colors from "../../styles/colors";

const InputAnimation = Animated.createAnimatedComponent(TextInput);

export const Input = styled(InputAnimation)`
  width: 100%;
  /* height: 100px; */
  font-size: 32px;

  padding: 8px;

  color: ${colors['USAFA Blue']};

  border-radius: 8px;
  border: ${colors["USAFA Blue"]} solid 2px;
`;