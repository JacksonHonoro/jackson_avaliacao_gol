import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex: 4;
  align-self: stretch;
  align-items: center;
`;

export const InfoCity = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
`;

export const Temperature = styled.Text`
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const MapCity = styled(MapView)`
  flex: 1;
`;

export const List = styled.View`
  flex: 3;
  align-self: stretch;
`;

export const Footer = styled.View`
  flex: 1;
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const TypeTemp = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
  color: #fff;
`;

export const InfoDay = styled.Text`
  margin-bottom: 15px;
`;

export const Day = styled.Text`
  font-size: 18px;
`;

export const Temp = styled.Text`
  font-size: 18px;
`;

export const IconClimate = styled.Text``;
