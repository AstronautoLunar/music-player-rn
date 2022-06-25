import { Animated } from "react-native";
import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Area = styled(Animated.View)`
  width: 100%;
  height: 70px;

  justify-content: center;
  align-items: center;

  background-color: ${colors['USAFA Blue']};
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 24px;

  color: ${colors['Beau Blue']};
`

export const PressArea = styled.Pressable`
  width: 100%;
`;