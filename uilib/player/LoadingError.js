'use strict';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export const LoadingError = () => {
  return (
    <ErrorMessageText>
      Error, no se pudo obtener la información
    </ErrorMessageText>
  );
};

const ErrorMessageText = styled(Text)({
  color: 'red',
  fontWeight: 'bold',
});
