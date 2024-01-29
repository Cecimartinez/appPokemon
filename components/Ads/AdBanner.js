'use strict';
import React from 'react';
import AdManager from './AdManager';
import {BannerAd} from 'react-native-google-mobile-ads';

const AdBanner = ({route}) => {
  if (AdManager.mustShowAds()) {
    return (
      <BannerAd
        size={AdManager.getBannerSize()}
        unitId={AdManager.getBannerId()}
      />
    );
  } else {
    return null;
  }
};

export default AdBanner;
