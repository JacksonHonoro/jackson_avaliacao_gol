import React, {useState, useCallback} from 'react';

import api from '../../services/api';
import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Main() {
  const [city, setCity] = useState('');
  const [inputCity, setInputCity] = useState('');

  const handleSearch = useCallback(async () => {
    setCity(inputCity);

    const infoCity = await api.get(`location/search/?query=${city}`);
    const {woeid} = infoCity.data[0];
    const weather = await api.get(`location/${woeid}`);
    console.tron.log(weather.data);
  }, [city, inputCity]);

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            placeholder="Pesquise por cidade"
            value={inputCity}
            onChangeText={text => setInputCity(text)}
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
