import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const InfoCity = styled.View`
  flex: 2;
  align-items: center;
`;

export const TextTitle = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const ContainerMap = styled.View`
  flex: 6;
  margin-bottom: 10px;
`;

export const MapCity = styled(MapView)`
  flex: 5;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 3;
  align-self: stretch;
`;

export const InfoDay = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const Day = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const TextInfo = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const IconClimate = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Footer = styled.View`
  padding: 8px;
  flex-direction: row;
  align-self: stretch;
  align-items: baseline;
  justify-content: space-between;
`;

export const TextCelsiusFahr = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const SwitchTemp = styled.Switch``;
