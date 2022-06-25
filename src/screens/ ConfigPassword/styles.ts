/**CORE */
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

/**STYLES */
import colors from '../../styles/colors';

const barSpaceStatusBar = StatusBar.currentHeight;

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors['Beau Blue']};

  padding-top: ${(barSpaceStatusBar || 0) + 24}px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;