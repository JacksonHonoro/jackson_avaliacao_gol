import React, {useState, useCallback} from 'react';

import api from '../../services/api';
import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Main() {
  const [city, setCity] = useState('');

  const handleSearch = useCallback(async () => {
    const infoCity = await api.get(`location/search/?query=${city}`);
    const {woeid} = infoCity.data[0];
    const weather = await api.get(`location/${woeid}`);
    console.tron.log(weather.data);
  }, [city]);

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
