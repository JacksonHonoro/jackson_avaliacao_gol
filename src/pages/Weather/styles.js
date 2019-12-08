import styled from 'styled-components/native';
// import MapView from 'react-native-maps';

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

export const MapCity = styled.View`
  flex: 1;
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
`;

export const Day = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Temp = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const IconClimate = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
`;

export const CelsiusFahre = styled.Text`
  flex: 1;
  font-size: 32px;
  color: #fff;
  text-align: center;
`;

export const SwitchTemp = styled.Switch`
  flex: 1;
`;
