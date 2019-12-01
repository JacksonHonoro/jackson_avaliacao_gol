import React from 'react';

import Background from '../../components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function Main() {
  return (
    <Background>
      <Container>
        <Form>
          <FormInput placeholder="Pesquise por cidade" />
          <SubmitButton onPress={() => {}}>Pesquisar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Main.navigationOptions = {
  title: 'Main',
};
