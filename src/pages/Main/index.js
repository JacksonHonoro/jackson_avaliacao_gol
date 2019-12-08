import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Keyboard, ActivityIndicator} from 'react-native';
import api from '../../services/api';
import * as WeatherActions from '../../store/modules/weatherCity/actions';

import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton, TextButton} from './styles';

export default function Main({navigation}) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState('false');
  const dispatch = useDispatch();

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const infoCity = await api.get(`location/search/?query=${city}`);
      const {woeid} = infoCity.data[0];
      try {
        const weather = await api.get(`location/${woeid}`);
        dispatch(WeatherActions.cityClimate(weather.data));
        navigation.navigate('Weather');
      } catch (error) {
        console.tron.log(error);
      }
    } catch (error) {
      console.tron.log(error);
    }
    Keyboard.dismiss();
    setLoading(false);
  }, [city, dispatch, navigation]);

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="location-city"
            placeholder="Pesquise por cidade"
            value={city}
            onChangeText={text => setCity(text)}
            returnKeyType="send"
            onSubmitEditing={handleSearch}
          />
          <SubmitButton loading={loading} onPress={handleSearch}>
            Pesquisar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Main.navigationOptions = {
  title: 'Principal',
};
