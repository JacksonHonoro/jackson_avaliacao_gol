import React, {useMemo, useEffect} from 'react';
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
  CelsiusFahre,
  InfoDay,
  Day,
  Temp,
  IconClimate,
} from './styles';

export default function Weather() {
  const weather = useSelector(state => state.weatherCity[0]);
  const {consolidated_weather} = weather;
  const linkIco = 'https://www.metaweather.com/static/img/weather/ico/';

  const title = useMemo(() => weather.title, [weather]);
  const tempDay = useMemo(() => consolidated_weather[0].the_temp, [
    consolidated_weather,
  ]);

  const days = [];
  for (const weat of consolidated_weather) {
    days.push({
      date: weat.applicable_date.split('-'),
      info: {
        id: weat.id,
        temp: Math.round(weat.the_temp),
        state: weat.weather_state_abbr,
      },
    });
  }

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
          data={days}
          keyExtractor={day => day.id}
          renderItem={({item}) => (
            <InfoDay>
              <Day>{`${item.date[2]}/${item.date[1]}`}</Day>
              <Temp>{item.info.temp}º</Temp>
              <IconClimate
                source={{
                  uri: `${linkIco}${item.info.state}.ico`,
                }}
              />
            </InfoDay>
          )}
        />
        <Footer>
          <CelsiusFahre>Celsius/Fahrenheit</CelsiusFahre>
        </Footer>
      </Container>
    </Background>
  );
}

Weather.navigationOptions = {
  title: 'Clima da cidade',
};
