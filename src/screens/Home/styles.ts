/**CORE */
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const barSpaceStatusBar = StatusBar.currentHeight;

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-top: ${(barSpaceStatusBar || 0) + 24}px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;