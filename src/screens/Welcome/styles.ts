import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors['Beau Blue']};
`

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;