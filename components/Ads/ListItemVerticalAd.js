'use strict';
import React from 'react';
import {View} from 'react-native-ui-lib';
import AdNativeViewBase from '../Ads/AdNativeViewBase';
import {
  AdvertiserView,
  HeadlineView,
  TaglineView,
  ImageView,
} from 'react-native-admob-native-ads';
import styled from 'styled-components/native';
import {color} from '../../designSystemManager';

const ListItemVerticalAd = ({repository}) => {
  return (
    <AdNativeViewBase repository={repository}>
      <CardView>
        <Image />
        <CardTextContainer>
          <Headline />
          <Advertiser />
        </CardTextContainer>
      </CardView>
    </AdNativeViewBase>
  );
};

const CardView = styled(View)({
  flexDirection: 'column',
  backgroundColor: color('backgroundDiff'),
  marginRight: 20,
});

export const CardTextContainer = styled(View)({
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: 0,
  width: 110,
});

const Headline = styled(HeadlineView)({
  fontWeight: 'bold',
  color: color('primary'),
  paddingVertical: 5,
  flex: 1,
});

const Advertiser = styled(AdvertiserView)({
  color: color('textDefault'),
  paddingVertical: 2,
});

const Image = styled(ImageView)({
  borderRadius: 4,
  width: 106,
  height: 106,
  backgroundColor: color('backgroundColor'),
});

export default ListItemVerticalAd;
