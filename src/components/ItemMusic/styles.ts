/**CORE */
import styled from "styled-components/native";

/**STYLES */
import colors from "../../styles/colors";

export const Area = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 24px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  
  color: ${colors['USAFA Blue']};
`;

export const TextLeft = styled(Text)`
  margin-left: 16px;
`;