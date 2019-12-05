import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import Background from '../../components/Background';

import {
  Container,
  Header,
  InfoCity,
  Title,
  Temperature,
  MapCity,
  List,
  Footer,
  TypeTemp,
  InfoDay,
  Day,
  Temp,
  IconClimate,
} from './styles';

export default function Weather() {
  const weather = useSelector(state => state.weatherCity[0]);
  const {consolidated_weather} = weather;

  const title = useMemo(() => weather.title, [weather]);
  const tempDay = useMemo(() => consolidated_weather[0].the_temp, [
    consolidated_weather,
  ]);
  // console.tron.log(weather);

  const convertFahrenheit = celsius => {
    return (celsius / 5) * 9 + 32;
  };

  return (
    <Background>
      <Container>
        <Header>
          <InfoCity>
            <Title>{title}</Title>
            <Temperature>{tempDay}</Temperature>
          </InfoCity>
          {/*
          <MapCity
            region={{
              latitude: -27.210753,
              longitude: -49.644183,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134,
            }}
            showsUserLocation
            loadingEnabled
          />
          */}
        </Header>

        <List
          data={consolidated_weather}
          keyExtractor={weat => weat.woeid}
          renderItem={({days}) => (
            <InfoDay>
              <Day />
              <Temp />
              <IconClimate />
            </InfoDay>
          )}
        />
        <Footer>
          <TypeTemp>Celsius/Fahrenheit</TypeTemp>
        </Footer>
      </Container>
    </Background>
  );
}

Weather.navigationOptions = {
  title: 'Clima da cidade',
};
