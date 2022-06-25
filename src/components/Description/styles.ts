import styled from "styled-components/native";

import colors from "../../styles/colors";

export type TextProps = {
  color?: string;
}

export const Text = styled.Text<TextProps>`
  font-size: 24px;
  
  text-align: center;

  color: ${props => props.color ? props.color : colors['Black']};
`;