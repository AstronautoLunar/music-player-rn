/**CORE */
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import colors from '../../styles/colors';

const barSpaceStatusBar = StatusBar.currentHeight;

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors['Beau Blue']};
`;

export const ListItemMusics = styled.FlatList`
  width: 100%;
  height: 100%;
  /* flex: 1; */

  padding-left: 16px;
  padding-right: 16px;
  `;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;