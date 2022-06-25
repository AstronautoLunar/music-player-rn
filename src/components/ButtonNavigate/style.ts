/**CORE */
import { Animated } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

/**TYPES */
import { themeProps } from "./types";

/**UTILS */
import { configThemeArea, configThemeText } from "./utils";

export const Area = styled(Animated.View)<themeProps>`
  width: 100%;
  height: 70px;

  justify-content: center;
  align-items: center;

  background-color: ${configThemeArea};
`;

export const Text = styled.Text<themeProps>`
  font-weight: bold;
  font-size: 24px;

  color: ${configThemeText};
`

type PressAreaProps = {
  width?: string;
}

export const PressArea = styled.Pressable<PressAreaProps>`
  width: ${props => props.width ? props.width : '100%'};
`;