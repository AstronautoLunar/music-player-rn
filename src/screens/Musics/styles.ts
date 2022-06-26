/**CORE */
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const barSpaceStatusBar = StatusBar.currentHeight;

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-top: 24px;
`

export const ListItemMusics = styled.FlatList`
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;