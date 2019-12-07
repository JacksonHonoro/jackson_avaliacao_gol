import React, {useMemo, useState} from 'react';
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
  SwitchTemp,
} from './styles';

export default function Weather() {
  const weather = useSelector(state => state.weatherCity[0]);
  const {consolidated_weather} = weather;
  const linkIco = 'https://www.metaweather.com/static/img/weather/ico/';
  // const [days, setDays] = useState([]);
  const [toggleCels, setToggleCels] = useState(false);

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
        tempCels: Math.round(weat.the_temp),
        tempFahr: Math.round((Math.round(weat.the_temp) / 5) * 9 + 32),
        state: weat.weather_state_abbr,
      },
    });
  }

  const handleToggleSwitch = () => {
    setToggleCels(!toggleCels);
  };

  // const degrees = useMemo(() => days.info.temp, [days]);
  console.tron.log(days);
  return (
    <Background>
      <Container>
        <Header>
          <InfoCity>
            <Title>{title}</Title>
            <Temperature>{tempDay}º</Temperature>
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
              {toggleCels ? (
                <Temp>{item.info.tempFahr}º</Temp>
              ) : (
                <Temp>{item.info.tempCels}º</Temp>
              )}
              <IconClimate
                source={{
                  uri: `${linkIco}${item.info.state}.ico`,
                }}
              />
            </InfoDay>
          )}
        />
        <Footer>
          {toggleCels ? (
            <CelsiusFahre>Fahrenheit</CelsiusFahre>
          ) : (
            <CelsiusFahre>Celsius</CelsiusFahre>
          )}

          <SwitchTemp
            value={toggleCels}
            onValueChange={handleToggleSwitch}
            thumbColor="#eee"
            trackColor={{false: '#3d3d3d', true: '#bcbcbc'}}
          />
        </Footer>
      </Container>
    </Background>
  );
}

Weather.navigationOptions = {
  title: 'Clima da cidade',
};
