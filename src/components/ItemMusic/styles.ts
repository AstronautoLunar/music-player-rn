/**CORE */
import styled from "styled-components/native";

/**STYLES */
import colors from "../../styles/colors";

export const Area = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  
  color: ${colors['USAFA Blue']};
`;

export const TextLeft = styled(Text)`
  margin-left: 16px;
`;