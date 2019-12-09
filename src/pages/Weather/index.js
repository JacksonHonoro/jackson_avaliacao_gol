import React, {useState} from 'react';
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
  const [toggleFahr, setToggleFahr] = useState(false);

  const locationCity = {
    center: {
      latitude: parseFloat(weather.coord[0]),
      longitude: parseFloat(weather.coord[1]),
    },
    zoom: 15,
    pitch: 0,
    altitude: 0,
    heading: 0,
  };

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
              <TextTitle>{weather.days[0].info.tempFahr}º</TextTitle>
            ) : (
              <TextTitle>{weather.days[0].info.tempCels}º</TextTitle>
            )}
          </InfoCity>
          <MapCity provider="google" camera={locationCity} />
        </ContainerMap>

        <List
          data={weather.days}
          keyExtractor={day => String(day.id)}
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
                  uri: `${weather.linkIco}${item.info.state}.ico`,
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
