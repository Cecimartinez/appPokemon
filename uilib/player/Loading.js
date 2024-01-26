'use strict';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const Loading = ({imageUrl}) => {
  return <LoadingComponent source={{uri: imageUrl}} />;
};

const LoadingComponent = styled(ActivityIndicator)({
  size: 'large',
});
