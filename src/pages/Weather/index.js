import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';

import Background from '../../components/Background';

import {
  Container,
  ContainerMap,
  InfoCity,
  TextTitle,
  MapCity,
  List,
  InfoDay,
  TextInfo,
  IconClimate,
  Footer,
  TextCelsiusFahr,
  SwitchTemp,
} from './styles';

export default function Weather() {
  const weather = useSelector(state => state.weatherCity[0]);
  const consolidated = weather.consolidated_weather;
  const linkIco = 'https://www.metaweather.com/static/img/weather/ico/';
  const coord = weather.latt_long.split(',');
  const days = [];
  const [toggleFahr, setToggleFahr] = useState(false);
  const mapLoc = {
    center: {
      latitude: parseFloat(coord[0]),
      longitude: parseFloat(coord[1]),
    },
    zoom: 14,
    pitch: 0,
    altitude: 0,
    heading: 0,
  };

  for (const weat of consolidated) {
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
    setToggleFahr(!toggleFahr);
  };

  return (
    <Background>
      <Container>
        <ContainerMap>
          <InfoCity>
            <TextTitle>{weather.title}</TextTitle>
            {toggleFahr ? (
              <TextTitle>{days[0].info.tempFahr}º</TextTitle>
            ) : (
              <TextTitle>{days[0].info.tempCels}º</TextTitle>
            )}
          </InfoCity>
          <MapCity provider="google" camera={mapLoc} />
        </ContainerMap>

        <List
          data={days}
          keyExtractor={day => day.id}
          renderItem={({item}) => (
            <InfoDay>
              <TextInfo>{`${item.date[2]}/${item.date[1]}`}</TextInfo>
              {toggleFahr ? (
                <TextInfo>{item.info.tempFahr}º</TextInfo>
              ) : (
                <TextInfo>{item.info.tempCels}º</TextInfo>
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
          {toggleFahr ? (
            <TextCelsiusFahr>Fahrenheit</TextCelsiusFahr>
          ) : (
            <TextCelsiusFahr>Celsius</TextCelsiusFahr>
          )}

          <SwitchTemp
            value={toggleFahr}
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
  title: 'Informações do clima',
};
