import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex: 4;
  align-self: stretch;
  background-color: #999;
  align-items: center;
`;

export const InfoCity = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 36px;
  font-weight: bold;
`;

export const Temperature = styled.Text`
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`;

export const ImageCity = styled.View``;

export const List = styled.View`
  flex: 3;
  align-self: stretch;
`;

export const Footer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: #999;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const TypeTemp = styled.Text`
  font-size: 24px;
  margin-bottom: 15px;
`;
