import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Alert, Keyboard, Image} from 'react-native';
import api from '../../services/api';
import * as WeatherActions from '../../store/modules/weatherCity/actions';

import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Main({navigation}) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const infoCity = await api.get(`location/search/?query=${city}`);
      const {woeid} = infoCity.data[0];
      const weather = await api.get(`location/${woeid}`);

      dispatch(WeatherActions.cityClimate(weather.data));
      navigation.navigate('Weather');
      setCity('');
    } catch (error) {
      Alert.alert('Nome da capital incorreto!');
      setCity('');
    }
    Keyboard.dismiss();
    setLoading(false);
  }, [city, dispatch, navigation]);

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="location-city"
            placeholder="Pesquise a capital"
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
  title: 'Bem-vindo!',
};
