import React from 'react';
import {View} from 'react-native';

import {Container, TInput} from './styles';

export default function Input({style, ...rest}) {
  return (
    <Container style={style}>
      <TInput {...rest} />
    </Container>
  );
}
