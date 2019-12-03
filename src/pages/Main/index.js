import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import api from '../../services/api';
import * as WeatherActions from '../../store/modules/weatherCity/actions';

import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Main() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = useCallback(async () => {
    try {
      const infoCity = await api.get(`location/search/?query=${city}`);
      const {woeid} = infoCity.data[0];
      try {
        const weather = await api.get(`location/${woeid}`);
        const {consolidated_weather} = weather.data;

        // console.tron.log(consolidated_weather);
        dispatch(WeatherActions.cityClimate(consolidated_weather));
      } catch (error) {
        console.tron.log(error);
      }
    } catch (error) {
      console.tron.log(error);
    }
  }, [city, dispatch]);

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            placeholder="Pesquise por cidade"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <SubmitButton onPress={handleSearch}>Pesquisar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Main.navigationOptions = {
  title: 'Main',
};
