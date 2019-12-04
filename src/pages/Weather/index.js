import React from 'react';

import Background from '../../components/Background';

import {
  Container,
  Header,
  InfoCity,
  Title,
  Temperature,
  ImageCity,
  List,
  Footer,
  TypeTemp,
} from './styles';

export default function Weather() {
  return (
    <Background>
      <Container>
        <Header>
          <InfoCity>
            <Title>Cidade</Title>
            <Temperature>18º</Temperature>
          </InfoCity>
          <ImageCity />
        </Header>

        <List />
        <Footer>
          <TypeTemp>Celsius/Fahrenheit</TypeTemp>
        </Footer>
      </Container>
    </Background>
  );
}

Weather.navigationOptions = {
  title: 'Weather',
};
